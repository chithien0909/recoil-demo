import React from 'react';
import {atom} from "recoil";
import {selector} from "recoil/dist";

export const textState = atom({
    key: 'textState',
    default: '',
});


export const charCountState = selector({
    key: 'charCountState',
    get: ({get}) => {
        const text = get(textState);
        return text.length;
    }
})
