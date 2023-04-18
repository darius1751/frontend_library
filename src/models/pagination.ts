export interface Pagination {
    previousPage:    number;
    hasPreviousPage: boolean;
    actualPage: number;
    nextPage:        number;
    hasNextPage:     boolean;
    missing:         number;
    totalRegisters:  number;
}
