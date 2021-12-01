export const separator = (digits: number): string => {
    return digits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
