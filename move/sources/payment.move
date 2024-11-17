module pent::payment {
    use aptos_framework::coin::{transfer, balance};
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::event;
    use aptos_framework::signer;

    #[event]
    struct PaymentEvent has store, drop {
        payer: address,
        items_cost: u64,
        lottery_contribution: u64,
        vendor_address: address,
    }

    public entry fun handle_payment(account: &signer, items_cost: u64, vendor_address: address) {
        let payer_address = signer::address_of(account);

        // Ensure balance is sufficient
        let payer_balance = balance<AptosCoin>(payer_address);
        assert!(payer_balance >= items_cost, 1);

        // Calculate lottery contribution and vendor payment
        let lottery_contribution = items_cost / 100;
        let payment_to_vendor = items_cost - lottery_contribution;

        // Transfer funds
        transfer<AptosCoin>(account, vendor_address, payment_to_vendor);

        // Emit a payment event
        event::emit(PaymentEvent {
            payer: payer_address,
            items_cost: items_cost,
            lottery_contribution: lottery_contribution,
            vendor_address: vendor_address,
        });
    }
}