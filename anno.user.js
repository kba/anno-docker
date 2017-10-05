// ==UserScript==
// @name         anno injector
// @namespace    http://kba.github.io
// @version      0.1
// @description  annotate
// @author       You
// @include      *
// @grant        GM_registerMenuCommand
// ==/UserScript==

const CDN = 'https://www.ub.uni-heidelberg.de/cdn/'
const ANNO_BASE = 'https://anno.ub.uni-heidelberg.de/anno/'

function injectJS(src) {
    let el = document.createElement("script")
    el.type = "text/javascript"
    el.src = CDN + '/' + src
    document.body.appendChild(el)
}

function injectCSS(src) {
    let el = document.createElement("link")
    el.rel = "stylesheet"
    el.href = CDN + '/' + src
    document.head.appendChild(el)
}

function main() {

    // hackety hack XXX
    XrxUtils = {}
    XrxVue = {}
    // injectJS("semtonotes/latest/semtonotes.js")
    // injectJS("xrx-utils/latest/xrx-utils.js")
    // injectJS("xrx-vue/latest/xrx-vue.js")

    injectJS("jquery/latest/jquery.js")
    injectCSS("font-awesome/4.7.0/font-awesome.css")
    injectCSS('bootstrap/3.3.7/css/bootstrap.min.css')
    injectJS("anno-common/dev/anno-common.js")
    injectJS("jquery-ui/1.12.1/jquery-ui.js")
    injectJS("quill/1.2.4/quill.js")
    injectJS("vuex/2.3.1/vuex.js")
    injectJS("vue/2.3.1/vue.js")
    injectJS("axios/0.16.2/axios.js")

    injectJS("authorities-client/latest/authorities-client.js")
    injectJS("anno-frontend/dev/anno-frontend.js")
    injectJS('bootstrap/3.3.7/js/bootstrap.min.js')

    setTimeout(function() {
        displayAnnotations({
            annoEndpoint: ANNO_BASE + 'anno',
            loginEndpoint: ANNO_BASE + 'auth/login?from=' + document.location.href,
            tokenEndpoint: ANNO_BASE + 'auth/token/test',
            collection: 'test'
        })
    }, 2000)
}

(function() {
    'use strict'

    GM_registerMenuCommand("Make this site annotatable", main)
})()
