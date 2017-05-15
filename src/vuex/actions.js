import {COMMIT_ITEM} from './mutation-type.js'

export default {
    commitItem: function (context) {
        setTimeout(function () {
            context.commit(COMMIT_ITEM)
        }, 2000)
    }
}