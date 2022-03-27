use near_sdk::{
    env,
    PromiseResult,
};

pub type AccountId = String;
pub type Gas = u64;
pub type Amount = u128;

pub type Balance = Amount;
pub type Money = Amount;
pub type Timestamp = u64;

pub const ONE_NEAR: u128 = 1_000_000_000_000_000_000_000_000 as u128;
pub const XCC_GAS: Gas = 20_000_000_000_000;
pub const MIN_ACCOUNT_BALANCE: u128 = ONE_NEAR * 3;

pub fn asNEAR(amount: u128) -> String {
    format!("{}", amount / ONE_NEAR)
}

pub fn toYocto<D: Into<u128>>(amount: D) -> u128 {
    ONE_NEAR * amount.into()
}

pub fn assert_self() {
    let caller = env::predecessor_account_id();
    let current = env::current_account_id();
    assert_eq!(caller, current, "Only this contract may call itself");
}

pub fn assert_single_promise_success(){
    assert_eq!(
        env::promise_results_count(),
        1,
        "Expected exactly one promise result",
    );
    match env::promise_result(0) {
        PromiseResult::Successful(_) => return,
        _ => panic!("Expected PromiseStatus to be successful"),
    };
}