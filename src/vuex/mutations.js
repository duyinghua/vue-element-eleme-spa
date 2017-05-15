import {ADD_ITEM, DELETE_ITEM, COMMIT_ITEM} from './mutation-type.js'

export default {
    [ADD_ITEM] (state, item) {
        state.items.push(item);
    },
    [DELETE_ITEM] (state) {
        state.items.pop();
    },
    [COMMIT_ITEM] (state){
        state.fetch++;
    }
}