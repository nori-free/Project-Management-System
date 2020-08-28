/**
 * ユーティリティの呼び出し
 */
import {
    hasSomeEmptyData
} from '../util/condition'
/**
 * 認証情報の定数
 */
import {
    // REGION,
    POOL_DATA,
    // IDENTITY_POOL_ID,
    // LOGINS_KEY
} from './constant'

/**
 * AWS関連のimport
 */
import {
    // CognitoUserPool,
    // CognitoUserAttribute,
    CognitoUser
} from 'amazon-cognito-identity-js'

require('amazon-cognito-js')
const AmazonCognitoIdentity = require('amazon-cognito-identity-js')
// const AWS = require('aws-sdk')
const userPool = new AmazonCognitoIdentity.CognitoUserPool(POOL_DATA)

// 認証周りを管轄する関数オブジェクト
export const Authentication = {
    // サインアップ
    userSignup: async (username, email, password) => {
        // 情報が不足していたら処理終了
        if( hasSomeEmptyData(username, email, password) ) {
            return
        }
        const attributeList = []
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
            Name: "name",
            Value: username
        }))
        await userPool.signUp(email, password, attributeList, null, (err, result) => {
            if (err) {
                alert('登録に失敗しました')
                alert(err.message)
                console.log(err)
                return
            } else {
                // サインアップ成功の場合、アクティベーション画面に遷移する
                alert(
                  "登録したメールアドレスへアクティベーション用のリンクを送付しました。"
                )
                console.log(result)
                location.href = "/verify"
            }
        })
    },
    activateUser: ((email, code) => {
        console.log(email, code)
        return new Promise((resolve, reject) => {
          const userData = {
            Username: email,
            Pool: userPool
          }
      
          const cognitoUser = new CognitoUser(userData)
          cognitoUser.confirmRegistration(code, true, (err) => {
            if (err) {
              console.log(err)
              reject(err)
            } else {
              // 成功
              resolve()
            }
          })
        })
      }),
    
    // // ログイン済みを判定
    // isLogined: (email) => {
    //     //
    // },

    // ログインアクション
    userLogin: async (email, password) => {
        if( hasSomeEmptyData(email, password) ) {
            return
        }
        const authenticationData = {
            Username: email,
            Password: password
        }
        const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData)

        const userData = {
            Username: email,
            Pool: userPool
        }
        const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)

        await cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: result => {
                console.log(result)
                // 成功処理
                return {status: true, message: result }
            },
            onFailure: err => {
                // 失敗処理
                console.error(err)
                return { status: false, message: err }
            }
        })
    },

    // // ログアウトアクション
    // userLogout: (email) => {
    //     //
    // },

    // // パスワード初期化アクション
    // passwordReset: (email) => {
    //     //
    // },

    // // ユーザ削除
    // deleteUser: (email, password) => {
    //     //
    // },
}