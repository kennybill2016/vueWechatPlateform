/**
 * Created by truncate on 2017/7/2.
 * Author: 带鞋拖地
 * QQ: 327056088
 *
 * 《江畔独步寻花》· 杜甫
 * 黄四娘家花满蹊，千朵万朵压枝低。
 * 留连戏蝶时时舞，自在娇莺恰恰啼。
 */

import * as types from '../mutation-types'

/**
 * 商户登陆
 * @param commit
 * @param user
 * @param merchant
 */
export const merchantLogin = ({ commit }, { user, merchant}) => {
    if (user && merchant) {
        commit(types.MERCHANT_LOGIN, {
            user: user,
            merchant: merchant
        })
    }
}

/**
 * 商户退出
 * @param commit
 */
export const merchantOut = ({ commit }) => {
    commit(types.MERCHANT_OUT, {
        user: {},
        merchant: {}
    })
}
