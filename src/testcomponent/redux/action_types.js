/*
包含所有actiontype
 */

export const DECREASE = "decrease";
export const CHANGE_VALUE = "changeValue";
export const ODD_INCREASE = "oddIncrease";
export const ADD = "add";
export const TIMEOUT = "timeout";

export const decrease = (data) => {
    return {
        type: "decrease",
        data: data
    }
};

export const changeValue = (data) => {
    return {
        type: "changeValue",
        data: data
    }
};

export const oddIncrease = (data) => {
    return {
        type: "oddIncrease",
        data: data
    }
};

export const add = (data) => {
    return {
        type: "add",
        data: data
    }
};

export const timeout = (data) => {
    return {
        type: "timeout",
        data: data
    }
};