module ppool::prize_pool {
    use aptos_framework::coin::transfer;
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::event;
    use aptos_framework::signer;
    use aptos_std::vector;
    use aptos_framework::randomness;

    /// Event to log prize claims
    #[event]
    struct PrizeClaimEvent has drop, store {
        winner: address, // Address of the winner
        prize: u64,      // Amount of the prize claimed  
    }

    #[event]
    struct WinnerDrawnEvent has drop, store {
        winner: address, // Address of the winner
    }

    /// Structure to keep track of the prize pool and participants
    struct PrizePool has key {
        total_pool: u64,                // Total amount in the prize pool
        participants: vector<address>,  // List of participants in the prize pool
    }

    /// Initialize the PrizePool
    public fun init_prize_pool(account: &signer) {
        let prize_pool = PrizePool {
            total_pool: 0,                  // Initialize the total pool amount to 0
            participants: vector::empty(),  // Initialize participants list as empty
        };
        // Move the initialized prize pool to the account
        move_to(account, prize_pool);
    }

    /// Add contribution to the prize pool and add the payer to the participants list
    public entry fun add_contribution(account: &signer, contributer: address, amount: u64) acquires PrizePool {
        let prize_pool = borrow_global_mut<PrizePool>(signer::address_of(account));
        // Update the total pool amount
        prize_pool.total_pool = prize_pool.total_pool + amount;
        // Add the contributor to the participants list
        vector::push_back(&mut prize_pool.participants, contributer);

        // Transfer contribution amount to the prize pool
        transfer<AptosCoin>(account, signer::address_of(account), amount);
    }

    /// Draw a winner from the participants list
    #[randomness]
    entry fun draw_winner(account: &signer) acquires PrizePool {
        let prize_pool = borrow_global<PrizePool>(signer::address_of(account));
        // Get the number of participants
        let participant_count = vector::length(&prize_pool.participants);
        // Ensure there are participants in the list
        assert!(participant_count > 0, 1);

        // Generate a random index within the range of participants
        let random_index = randomness::u64_range(0, participant_count);
        let winner = *vector::borrow(&prize_pool.participants, random_index);

        // Emit an event with the winner's address
        let winner_drawn_event = WinnerDrawnEvent {
            winner: winner,
        };
        event::emit(winner_drawn_event);
    }

    /// Claim the prize by the winner
    public entry fun claim_prize(account: &signer, winner: address) acquires PrizePool {
        let prize_pool = borrow_global_mut<PrizePool>(signer::address_of(account));
        let prize_amount = prize_pool.total_pool;

        // Reset the prize pool after claiming
        prize_pool.total_pool = 0;
        prize_pool.participants = vector::empty();

        // Transfer the prize amount to the winner 
        transfer<AptosCoin>(account, winner, prize_amount);

        // Log the prize claim event using the module event system
        let prize_claim_event = PrizeClaimEvent {
            winner: winner,
            prize: prize_amount,
        };
        event::emit(prize_claim_event);
    }
}





// "Result": [
   // "7344bcf50d525ca07561f809ae70e5164025b7f3db3579fb7269e2566a1e9899::payment",
   // "7344bcf50d525ca07561f809ae70e5164025b7f3db3579fb7269e2566a1e9899::prize_pool"
 // ]