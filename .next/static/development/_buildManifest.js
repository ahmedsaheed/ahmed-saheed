self.__BUILD_MANIFEST = {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    "/": ["static\u002Fchunks\u002Fpages\u002Findex.js"],
    "/_error": ["static\u002Fchunks\u002Fpages\u002F_error.js"],
    "/blah": ["static\u002Fchunks\u002Fpages\u002Fblah.js"],
    "/books": ["static\u002Fchunks\u002Fpages\u002Fbooks.js"],
    sortedPages: ["\u002F", "\u002F_app", "\u002F_error", "\u002Fblah", "\u002Fbooks"],
}
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
