export function calculateTotal(amount, taxRate){
    return (amount * (1 + taxRate)).toFixed(2);
}