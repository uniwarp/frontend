(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1376ebd97a90e0965c09":function(e,r,t){"use strict";(function(r,n){var o=t("8e08e542008e4aef1f58"),i=t("ea9638333d31299c5b7e"),a=t("1602201ade691baaa9ce"),f=t("0ebb39a2d74b5bab7129"),c=t("c44af4ca2cda9d1bd87e"),s=t("aa9ba6ef264394055335"),u=t("4d294c5ce19f76e668a6"),d=t("f242a5dcbaaf8744166d"),l=t("cdd2ed44a555de5a83c9"),h=t("6cc05a37bca89b8a6c56"),p=t("993b44cf737ee7ca00a5"),v=t("a07edd8ef6e2e39d5159"),m=t("6640c9a1814ca5546811").Transaction,g=t("e091fec03cc3fd2a99c1").default,y=function(e){return o.isUndefined(e)||o.isNull(e)},b=function(){var e=this;i.packageInit(this,arguments),delete this.BatchRequest,delete this.extend;var r=[new a({name:"getNetworkId",call:"net_version",params:0,outputFormatter:parseInt}),new a({name:"getChainId",call:"eth_chainId",params:0,outputFormatter:p.hexToNumber}),new a({name:"getGasPrice",call:"eth_gasPrice",params:0}),new a({name:"getTransactionCount",call:"eth_getTransactionCount",params:2,inputFormatter:[function(e){if(p.isAddress(e))return e;throw new Error("Address "+e+' is not a valid address to get the "transactionCount".')},function(){return"latest"}]})];this._ethereumCall={},o.each(r,function(r){r.attachToObject(e._ethereumCall),r.setRequestManager(e._requestManager)}),this.wallet=new w(this)};function w(e){this._accounts=e,this.length=0,this.defaultKeyName="web3js_wallet"}b.prototype._addAccountFunctions=function(e){var r=this;return e.signTransaction=function(t,n){return r.signTransaction(t,e.privateKey,n)},e.sign=function(t){return r.sign(t,e.privateKey)},e.encrypt=function(t,n){return r.encrypt(e.privateKey,t,n)},e},b.prototype.create=function(e){return this._addAccountFunctions(f.create(e||p.randomHex(32)))},b.prototype.privateKeyToAccount=function(e,r){if(e.startsWith("0x")||(e="0x"+e),!r&&66!==e.length)throw new Error("Private key must be 32 bytes long");return this._addAccountFunctions(f.fromPrivate(e))},b.prototype.signTransaction=function(e,r,t){var i=!1,a={},f=!(!e||!(e.chain&&e.hardfork||e.common));if(t=t||function(){},!e)return i=new Error("No transaction object given!"),t(i),Promise.reject(i);function c(e){const i=function(e){if(e.common&&e.chain&&e.hardfork)return new Error("Please provide the ethereumjs-common object or the chain and hardfork property but not all together.");if(e.chain&&!e.hardfork||e.hardfork&&!e.chain)return new Error('When specifying chain and hardfork, both values must be defined. Received "chain": '+e.chain+', "hardfork": '+e.hardfork);if(!e.gas&&!e.gasLimit)return new Error('"gas" is missing');if(e.nonce<0||e.gas<0||e.gasPrice<0||e.chainId<0)return new Error("Gas, gasPrice, nonce or chainId is lower than 0");return}(e);if(i)return t(i),Promise.reject(i);try{var c=v.formatters.inputCallFormatter(o.clone(e));c.to=c.to||"0x",c.data=c.data||"0x",c.value=c.value||"0x",c.chainId=p.numberToHex(c.chainId),f?(c.common&&(a.common=g.forCustomChain(c.common.baseChain||"mainnet",{name:c.common.customChain.name||"custom-network",networkId:c.common.customChain.networkId,chainId:c.common.customChain.chainId},c.common.hardfork||"petersburg"),delete c.common),c.chain&&(a.chain=c.chain,delete c.chain),c.hardfork&&(a.hardfork=c.hardfork,delete c.hardfork)):(a.common=g.forCustomChain("mainnet",{name:"custom-network",networkId:c.networkId,chainId:c.chainId},"petersburg"),delete c.networkId),r.startsWith("0x")&&(r=r.substring(2));var s=new m(c,a);s.sign(n.from(r,"hex"));var u=s.validate(!0);if(""!==u)throw new Error("Signer Error: "+u);var d="0x"+s.serialize().toString("hex"),l=p.keccak256(d),h={messageHash:"0x"+n.from(s.hash(!1)).toString("hex"),v:"0x"+n.from(s.v).toString("hex"),r:"0x"+n.from(s.r).toString("hex"),s:"0x"+n.from(s.s).toString("hex"),rawTransaction:d,transactionHash:l};return t(null,h),h}catch(e){return t(e),Promise.reject(e)}}return void 0!==e.nonce&&void 0!==e.chainId&&void 0!==e.gasPrice&&f?Promise.resolve(c(e)):Promise.all([y(e.chainId)?this._ethereumCall.getChainId():e.chainId,y(e.gasPrice)?this._ethereumCall.getGasPrice():e.gasPrice,y(e.nonce)?this._ethereumCall.getTransactionCount(this.privateKeyToAccount(r).address):e.nonce,y(f)?this._ethereumCall.getNetworkId():1]).then(function(r){if(y(r[0])||y(r[1])||y(r[2])||y(r[3]))throw new Error('One of the values "chainId", "networkId", "gasPrice", or "nonce" couldn\'t be fetched: '+JSON.stringify(r));return c(o.extend(e,{chainId:r[0],gasPrice:r[1],nonce:r[2],networkId:r[3]}))})},b.prototype.recoverTransaction=function(e){var r=s.decode(e),t=f.encodeSignature(r.slice(6,9)),n=u.toNumber(r[6]),o=n<35?[]:[u.fromNumber(n-35>>1),"0x","0x"],i=r.slice(0,6).concat(o),a=s.encode(i);return f.recover(c.keccak256(a),t)},b.prototype.hashMessage=function(e){var r=p.isHexStrict(e)?e:p.utf8ToHex(e),t=p.hexToBytes(r),o=n.from(t),i="\x19Ethereum Signed Message:\n"+t.length,a=n.from(i),f=n.concat([a,o]);return c.keccak256s(f)},b.prototype.sign=function(e,r){if(r.startsWith("0x")||(r="0x"+r),66!==r.length)throw new Error("Private key must be 32 bytes long");var t=this.hashMessage(e),n=f.sign(t,r),o=f.decodeSignature(n);return{message:e,messageHash:t,v:o[0],r:o[1],s:o[2],signature:n}},b.prototype.recover=function(e,r,t){var n=[].slice.apply(arguments);return o.isObject(e)?this.recover(e.messageHash,f.encodeSignature([e.v,e.r,e.s]),!0):(t||(e=this.hashMessage(e)),n.length>=4?(t=n.slice(-1)[0],t=!!o.isBoolean(t)&&!!t,this.recover(e,f.encodeSignature(n.slice(1,4)),t)):f.recover(e,r))},b.prototype.decrypt=function(e,r,t){if(!o.isString(r))throw new Error("No password given.");var i,a,f=o.isObject(e)?e:JSON.parse(t?e.toLowerCase():e);if(3!==f.version)throw new Error("Not a valid V3 wallet");if("scrypt"===f.crypto.kdf)a=f.crypto.kdfparams,i=l.syncScrypt(n.from(r),n.from(a.salt,"hex"),a.n,a.r,a.p,a.dklen);else{if("pbkdf2"!==f.crypto.kdf)throw new Error("Unsupported key derivation scheme");if("hmac-sha256"!==(a=f.crypto.kdfparams).prf)throw new Error("Unsupported parameters to PBKDF2");i=d.pbkdf2Sync(n.from(r),n.from(a.salt,"hex"),a.c,a.dklen,"sha256")}var c=n.from(f.crypto.ciphertext,"hex");if(p.sha3(n.from([...i.slice(16,32),...c])).replace("0x","")!==f.crypto.mac)throw new Error("Key derivation failed - possibly wrong password");var s=d.createDecipheriv(f.crypto.cipher,i.slice(0,16),n.from(f.crypto.cipherparams.iv,"hex")),u="0x"+n.from([...s.update(c),...s.final()]).toString("hex");return this.privateKeyToAccount(u,!0)},b.prototype.encrypt=function(e,r,t){var o,i=this.privateKeyToAccount(e,!0),a=(t=t||{}).salt||d.randomBytes(32),f=t.iv||d.randomBytes(16),c=t.kdf||"scrypt",s={dklen:t.dklen||32,salt:a.toString("hex")};if("pbkdf2"===c)s.c=t.c||262144,s.prf="hmac-sha256",o=d.pbkdf2Sync(n.from(r),n.from(s.salt,"hex"),s.c,s.dklen,"sha256");else{if("scrypt"!==c)throw new Error("Unsupported kdf");s.n=t.n||8192,s.r=t.r||8,s.p=t.p||1,o=l.syncScrypt(n.from(r),n.from(s.salt,"hex"),s.n,s.r,s.p,s.dklen)}var u=d.createCipheriv(t.cipher||"aes-128-ctr",o.slice(0,16),f);if(!u)throw new Error("Unsupported cipher");var v=n.from([...u.update(n.from(i.privateKey.replace("0x",""),"hex")),...u.final()]),m=p.sha3(n.from([...o.slice(16,32),...v])).replace("0x","");return{version:3,id:h.v4({random:t.uuid||d.randomBytes(16)}),address:i.address.toLowerCase().replace("0x",""),crypto:{ciphertext:v.toString("hex"),cipherparams:{iv:f.toString("hex")},cipher:t.cipher||"aes-128-ctr",kdf:c,kdfparams:s,mac:m.toString("hex")}}},w.prototype._findSafeIndex=function(e){return e=e||0,o.has(this,e)?this._findSafeIndex(e+1):e},w.prototype._currentIndexes=function(){return Object.keys(this).map(function(e){return parseInt(e)}).filter(function(e){return e<9e20})},w.prototype.create=function(e,r){for(var t=0;t<e;++t)this.add(this._accounts.create(r).privateKey);return this},w.prototype.add=function(e){return o.isString(e)&&(e=this._accounts.privateKeyToAccount(e)),this[e.address]?this[e.address]:((e=this._accounts.privateKeyToAccount(e.privateKey)).index=this._findSafeIndex(),this[e.index]=e,this[e.address]=e,this[e.address.toLowerCase()]=e,this.length++,e)},w.prototype.remove=function(e){var r=this[e];return!(!r||!r.address)&&(this[r.address].privateKey=null,delete this[r.address],this[r.address.toLowerCase()].privateKey=null,delete this[r.address.toLowerCase()],this[r.index].privateKey=null,delete this[r.index],this.length--,!0)},w.prototype.clear=function(){var e=this;return this._currentIndexes().forEach(function(r){e.remove(r)}),this},w.prototype.encrypt=function(e,r){var t=this;return this._currentIndexes().map(function(n){return t[n].encrypt(e,r)})},w.prototype.decrypt=function(e,r){var t=this;return e.forEach(function(e){var n=t._accounts.decrypt(e,r);if(!n)throw new Error("Couldn't decrypt accounts. Password wrong?");t.add(n)}),this},w.prototype.save=function(e,r){return localStorage.setItem(r||this.defaultKeyName,JSON.stringify(this.encrypt(e))),!0},w.prototype.load=function(e,r){var t=localStorage.getItem(r||this.defaultKeyName);if(t)try{t=JSON.parse(t)}catch(e){}return this.decrypt(t||[],e)},function(e){var r;try{r=window[e];var t="__storage_test__";return r.setItem(t,t),r.removeItem(t),!0}catch(e){return e&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&r&&0!==r.length}}("localStorage")||(delete w.prototype.save,delete w.prototype.load),e.exports=b}).call(this,t("698d75b157f24ae829cc"),t("4de17b50d35d24f9c74a").Buffer)},"3d02bc8af7b8b598cf7f":function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.defineProperties=void 0;var n=t("97e544c2b5273ff09282"),o=t("3aad3afd3c29698c953a"),i=t("787b67936387d49cb10d"),a=t("84f5968db8a556f944c9");r.defineProperties=function(r,t,f){if(r.raw=[],r._fields=[],r.toJSON=function(e){if(void 0===e&&(e=!1),e){var t={};return r._fields.forEach(function(e){t[e]="0x"+r[e].toString("hex")}),t}return a.baToJSON(r.raw)},r.serialize=function(){return i.encode(r.raw)},t.forEach(function(t,o){function i(){return r.raw[o]}function f(i){"00"!==(i=a.toBuffer(i)).toString("hex")||t.allowZero||(i=e.allocUnsafe(0)),t.allowLess&&t.length?(i=a.stripZeros(i),n(t.length>=i.length,"The field "+t.name+" must not have more "+t.length+" bytes")):t.allowZero&&0===i.length||!t.length||n(t.length===i.length,"The field "+t.name+" must have byte length of "+t.length),r.raw[o]=i}r._fields.push(t.name),Object.defineProperty(r,t.name,{enumerable:!0,configurable:!0,get:i,set:f}),t.default&&(r[t.name]=t.default),t.alias&&Object.defineProperty(r,t.alias,{enumerable:!1,configurable:!0,set:f,get:i})}),f)if("string"===typeof f&&(f=e.from(o.stripHexPrefix(f),"hex")),e.isBuffer(f)&&(f=i.decode(f)),Array.isArray(f)){if(f.length>r._fields.length)throw new Error("wrong number of fields in data");f.forEach(function(e,t){r[r._fields[t]]=a.toBuffer(e)})}else{if("object"!==typeof f)throw new Error("invalid data");var c=Object.keys(f);t.forEach(function(e){-1!==c.indexOf(e.name)&&(r[e.name]=f[e.name]),-1!==c.indexOf(e.alias)&&(r[e.alias]=f[e.alias])})}}}).call(this,t("4de17b50d35d24f9c74a").Buffer)},"40cd966eb45ad36829ff":function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.ecdhUnsafe=r.ecdh=r.recover=r.verify=r.sign=r.signatureImportLax=r.signatureImport=r.signatureExport=r.signatureNormalize=r.publicKeyCombine=r.publicKeyTweakMul=r.publicKeyTweakAdd=r.publicKeyVerify=r.publicKeyConvert=r.publicKeyCreate=r.privateKeyTweakMul=r.privateKeyTweakAdd=r.privateKeyModInverse=r.privateKeyNegate=r.privateKeyImport=r.privateKeyExport=r.privateKeyVerify=void 0;var n=t("0b8977e2b275139c0743"),o=t("50835f0234981621378f"),i=t("ad4968ace33763ab37e5");r.privateKeyVerify=function(e){return 32===e.length&&n.privateKeyVerify(Uint8Array.from(e))},r.privateKeyExport=function(e,r){if(32!==e.length)throw new RangeError("private key length is invalid");var t=o.privateKeyExport(e,r);return i.privateKeyExport(e,t,r)},r.privateKeyImport=function(e){if(null!==(e=i.privateKeyImport(e))&&32===e.length&&r.privateKeyVerify(e))return e;throw new Error("couldn't import from DER format")},r.privateKeyNegate=function(r){return e.from(n.privateKeyNegate(Uint8Array.from(r)))},r.privateKeyModInverse=function(r){if(32!==r.length)throw new Error("private key length is invalid");return e.from(o.privateKeyModInverse(Uint8Array.from(r)))},r.privateKeyTweakAdd=function(r,t){return e.from(n.privateKeyTweakAdd(Uint8Array.from(r),t))},r.privateKeyTweakMul=function(r,t){return e.from(n.privateKeyTweakMul(Uint8Array.from(r),Uint8Array.from(t)))},r.publicKeyCreate=function(r,t){return e.from(n.publicKeyCreate(Uint8Array.from(r),t))},r.publicKeyConvert=function(r,t){return e.from(n.publicKeyConvert(Uint8Array.from(r),t))},r.publicKeyVerify=function(e){return(33===e.length||65===e.length)&&n.publicKeyVerify(Uint8Array.from(e))},r.publicKeyTweakAdd=function(r,t,o){return e.from(n.publicKeyTweakAdd(Uint8Array.from(r),Uint8Array.from(t),o))},r.publicKeyTweakMul=function(r,t,o){return e.from(n.publicKeyTweakMul(Uint8Array.from(r),Uint8Array.from(t),o))},r.publicKeyCombine=function(r,t){var o=[];return r.forEach(function(e){o.push(Uint8Array.from(e))}),e.from(n.publicKeyCombine(o,t))},r.signatureNormalize=function(r){return e.from(n.signatureNormalize(Uint8Array.from(r)))},r.signatureExport=function(r){return e.from(n.signatureExport(Uint8Array.from(r)))},r.signatureImport=function(r){return e.from(n.signatureImport(Uint8Array.from(r)))},r.signatureImportLax=function(e){if(0===e.length)throw new RangeError("signature length is invalid");var r=i.signatureImportLax(e);if(null===r)throw new Error("couldn't parse DER signature");return o.signatureImport(r)},r.sign=function(r,t,o){if(null===o)throw new TypeError("options should be an Object");var i=void 0;if(o){if(i={},null===o.data)throw new TypeError("options.data should be a Buffer");if(o.data){if(32!=o.data.length)throw new RangeError("options.data length is invalid");i.data=new Uint8Array(o.data)}if(null===o.noncefn)throw new TypeError("options.noncefn should be a Function");o.noncefn&&(i.noncefn=function(r,t,n,i,a){var f=null!=n?e.from(n):null,c=null!=i?e.from(i):null,s=e.from("");return o.noncefn&&(s=o.noncefn(e.from(r),e.from(t),f,c,a)),new Uint8Array(s)})}var a=n.ecdsaSign(Uint8Array.from(r),Uint8Array.from(t),i);return{signature:e.from(a.signature),recovery:a.recid}},r.verify=function(e,r,t){return n.ecdsaVerify(Uint8Array.from(r),Uint8Array.from(e),t)},r.recover=function(r,t,o,i){return e.from(n.ecdsaRecover(Uint8Array.from(t),o,Uint8Array.from(r),i))},r.ecdh=function(r,t){return e.from(n.ecdh(Uint8Array.from(r),Uint8Array.from(t),{}))},r.ecdhUnsafe=function(r,t,n){if(33!==r.length&&65!==r.length)throw new RangeError("public key length is invalid");if(32!==t.length)throw new RangeError("private key length is invalid");return e.from(o.ecdhUnsafe(Uint8Array.from(r),Uint8Array.from(t),n))}}).call(this,t("4de17b50d35d24f9c74a").Buffer)},"50835f0234981621378f":function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0});var n=t("a07bfecaef33297c14e6"),o=new(0,t("347ed30c1425cbc1450a").ec)("secp256k1"),i=o.curve;r.privateKeyExport=function(e,r){void 0===r&&(r=!0);var t=new n(e);if(t.ucmp(i.n)>=0)throw new Error("couldn't export to DER format");var f=o.g.mul(t);return a(f.getX(),f.getY(),r)},r.privateKeyModInverse=function(r){var t=new n(r);if(t.ucmp(i.n)>=0||t.isZero())throw new Error("private key range is invalid");return t.invm(i.n).toArrayLike(e,"be",32)},r.signatureImport=function(r){var t=new n(r.r);t.ucmp(i.n)>=0&&(t=new n(0));var o=new n(r.s);return o.ucmp(i.n)>=0&&(o=new n(0)),e.concat([t.toArrayLike(e,"be",32),o.toArrayLike(e,"be",32)])},r.ecdhUnsafe=function(e,r,t){void 0===t&&(t=!0);var f=o.keyFromPublic(e),c=new n(r);if(c.ucmp(i.n)>=0||c.isZero())throw new Error("scalar was invalid (zero or overflow)");var s=f.pub.mul(c);return a(s.getX(),s.getY(),t)};var a=function(r,t,n){var o;return n?((o=e.alloc(33))[0]=t.isOdd()?3:2,r.toArrayLike(e,"be",32).copy(o,1)):((o=e.alloc(65))[0]=4,r.toArrayLike(e,"be",32).copy(o,1),t.toArrayLike(e,"be",32).copy(o,33)),o}}).call(this,t("4de17b50d35d24f9c74a").Buffer)},"565678c4edf6105f996c":function(e,r,t){var n=t("d77c06f6788a1cf4220d"),o=t("eb539fefcb929b7e1b63");e.exports=function(e,r,t){var i=r&&t||0;"string"==typeof e&&(r="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||n)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,r)for(var f=0;f<16;++f)r[i+f]=a[f];return r||o(a)}},"6640c9a1814ca5546811":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t("f80443e3fb9eb61bbd5f");r.Transaction=n.default;var o=t("ffd9b28736209e7a93d2");r.FakeTransaction=o.default},"6cc05a37bca89b8a6c56":function(e,r,t){var n=t("a4b03507867e552e0c36"),o=t("565678c4edf6105f996c"),i=o;i.v1=n,i.v4=o,e.exports=i},"7bcd51a3902f3a5cdddd":function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.importPublic=r.privateToPublic=r.privateToAddress=r.publicToAddress=r.pubToAddress=r.isValidPublic=r.isValidPrivate=r.isPrecompiled=r.generateAddress2=r.generateAddress=r.isValidChecksumAddress=r.toChecksumAddress=r.isZeroAddress=r.isValidAddress=r.zeroAddress=void 0;var n=t("97e544c2b5273ff09282"),o=t("3aad3afd3c29698c953a"),i=t("40cd966eb45ad36829ff"),a=t("a07bfecaef33297c14e6"),f=t("84f5968db8a556f944c9"),c=t("aa18b78f2f1000fc92cc");r.zeroAddress=function(){var e=f.zeros(20);return f.bufferToHex(e)},r.isValidAddress=function(e){return/^0x[0-9a-fA-F]{40}$/.test(e)},r.isZeroAddress=function(e){return r.zeroAddress()===f.addHexPrefix(e)},r.toChecksumAddress=function(e,r){e=o.stripHexPrefix(e).toLowerCase();for(var t=void 0!==r?r.toString()+"0x":"",n=c.keccak(t+e).toString("hex"),i="0x",a=0;a<e.length;a++)parseInt(n[a],16)>=8?i+=e[a].toUpperCase():i+=e[a];return i},r.isValidChecksumAddress=function(e,t){return r.isValidAddress(e)&&r.toChecksumAddress(e,t)===e},r.generateAddress=function(r,t){r=f.toBuffer(r);var n=new a(t);return n.isZero()?c.rlphash([r,null]).slice(-20):c.rlphash([r,e.from(n.toArray())]).slice(-20)},r.generateAddress2=function(r,t,o){var i=f.toBuffer(r),a=f.toBuffer(t),s=f.toBuffer(o);return n(20===i.length),n(32===a.length),c.keccak256(e.concat([e.from("ff","hex"),i,a,c.keccak256(s)])).slice(-20)},r.isPrecompiled=function(e){var r=f.unpad(e);return 1===r.length&&r[0]>=1&&r[0]<=8},r.isValidPrivate=function(e){return i.privateKeyVerify(e)},r.isValidPublic=function(r,t){return void 0===t&&(t=!1),64===r.length?i.publicKeyVerify(e.concat([e.from([4]),r])):!!t&&i.publicKeyVerify(r)},r.pubToAddress=function(e,r){return void 0===r&&(r=!1),e=f.toBuffer(e),r&&64!==e.length&&(e=i.publicKeyConvert(e,!1).slice(1)),n(64===e.length),c.keccak(e).slice(-20)},r.publicToAddress=r.pubToAddress,r.privateToAddress=function(e){return r.publicToAddress(r.privateToPublic(e))},r.privateToPublic=function(e){return e=f.toBuffer(e),i.publicKeyCreate(e,!1).slice(1)},r.importPublic=function(e){return 64!==(e=f.toBuffer(e)).length&&(e=i.publicKeyConvert(e,!1).slice(1)),e}}).call(this,t("4de17b50d35d24f9c74a").Buffer)},"84f5968db8a556f944c9":function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.baToJSON=r.addHexPrefix=r.toUnsigned=r.fromSigned=r.bufferToHex=r.bufferToInt=r.toBuffer=r.stripZeros=r.unpad=r.setLengthRight=r.setLength=r.setLengthLeft=r.zeros=void 0;var n=t("3aad3afd3c29698c953a"),o=t("a07bfecaef33297c14e6");r.zeros=function(r){return e.allocUnsafe(r).fill(0)},r.setLengthLeft=function(e,t,n){void 0===n&&(n=!1);var o=r.zeros(t);return e=r.toBuffer(e),n?e.length<t?(e.copy(o),o):e.slice(0,t):e.length<t?(e.copy(o,t-e.length),o):e.slice(-t)},r.setLength=r.setLengthLeft,r.setLengthRight=function(e,t){return r.setLength(e,t,!0)},r.unpad=function(e){for(var r=(e=n.stripHexPrefix(e))[0];e.length>0&&"0"===r.toString();)r=(e=e.slice(1))[0];return e},r.stripZeros=r.unpad,r.toBuffer=function(r){if(!e.isBuffer(r))if(Array.isArray(r))r=e.from(r);else if("string"===typeof r){if(!n.isHexString(r))throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: "+r);r=e.from(n.padToEven(n.stripHexPrefix(r)),"hex")}else if("number"===typeof r)r=n.intToBuffer(r);else if(null===r||void 0===r)r=e.allocUnsafe(0);else if(o.isBN(r))r=r.toArrayLike(e);else{if(!r.toArray)throw new Error("invalid type");r=e.from(r.toArray())}return r},r.bufferToInt=function(e){return new o(r.toBuffer(e)).toNumber()},r.bufferToHex=function(e){return"0x"+(e=r.toBuffer(e)).toString("hex")},r.fromSigned=function(e){return new o(e).fromTwos(256)},r.toUnsigned=function(r){return e.from(r.toTwos(256).toArray())},r.addHexPrefix=function(e){return"string"!==typeof e?e:n.isHexPrefixed(e)?e:"0x"+e},r.baToJSON=function(t){if(e.isBuffer(t))return"0x"+t.toString("hex");if(t instanceof Array){for(var n=[],o=0;o<t.length;o++)n.push(r.baToJSON(t[o]));return n}}}).call(this,t("4de17b50d35d24f9c74a").Buffer)},"9218aa99de2de28dec7a":function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.hashPersonalMessage=r.isValidSignature=r.fromRpcSig=r.toRpcSig=r.ecrecover=r.ecsign=void 0;var n=t("40cd966eb45ad36829ff"),o=t("a07bfecaef33297c14e6"),i=t("84f5968db8a556f944c9"),a=t("aa18b78f2f1000fc92cc");function f(e,r){return r?e-(2*r+35):e-27}function c(e){return 0===e||1===e}r.ecsign=function(e,r,t){var o=n.sign(e,r),i=o.recovery;return{r:o.signature.slice(0,32),s:o.signature.slice(32,64),v:t?i+(2*t+35):i+27}},r.ecrecover=function(r,t,o,a,s){var u=e.concat([i.setLength(o,32),i.setLength(a,32)],64),d=f(t,s);if(!c(d))throw new Error("Invalid signature v value");var l=n.recover(r,u,d);return n.publicKeyConvert(l,!1).slice(1)},r.toRpcSig=function(r,t,n,o){if(!c(f(r,o)))throw new Error("Invalid signature v value");return i.bufferToHex(e.concat([i.setLengthLeft(t,32),i.setLengthLeft(n,32),i.toBuffer(r)]))},r.fromRpcSig=function(e){var r=i.toBuffer(e);if(65!==r.length)throw new Error("Invalid signature length");var t=r[64];return t<27&&(t+=27),{v:t,r:r.slice(0,32),s:r.slice(32,64)}},r.isValidSignature=function(e,r,t,n,i){void 0===n&&(n=!0);var a=new o("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),s=new o("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);if(32!==r.length||32!==t.length)return!1;if(!c(f(e,i)))return!1;var u=new o(r),d=new o(t);return!(u.isZero()||u.gt(s)||d.isZero()||d.gt(s))&&(!n||1!==d.cmp(a))},r.hashPersonalMessage=function(r){var t=e.from("\x19Ethereum Signed Message:\n"+r.length.toString(),"utf-8");return a.keccak(e.concat([t,r]))}}).call(this,t("4de17b50d35d24f9c74a").Buffer)},a180a07ea9f9cccb8404:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.KECCAK256_RLP=r.KECCAK256_RLP_S=r.KECCAK256_RLP_ARRAY=r.KECCAK256_RLP_ARRAY_S=r.KECCAK256_NULL=r.KECCAK256_NULL_S=r.TWO_POW256=r.MAX_INTEGER=void 0;var n=t("a07bfecaef33297c14e6");r.MAX_INTEGER=new n("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),r.TWO_POW256=new n("10000000000000000000000000000000000000000000000000000000000000000",16),r.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",r.KECCAK256_NULL=e.from(r.KECCAK256_NULL_S,"hex"),r.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",r.KECCAK256_RLP_ARRAY=e.from(r.KECCAK256_RLP_ARRAY_S,"hex"),r.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",r.KECCAK256_RLP=e.from(r.KECCAK256_RLP_S,"hex")}).call(this,t("4de17b50d35d24f9c74a").Buffer)},a4b03507867e552e0c36:function(e,r,t){var n,o,i=t("d77c06f6788a1cf4220d"),a=t("eb539fefcb929b7e1b63"),f=0,c=0;e.exports=function(e,r,t){var s=r&&t||0,u=r||[],d=(e=e||{}).node||n,l=void 0!==e.clockseq?e.clockseq:o;if(null==d||null==l){var h=i();null==d&&(d=n=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==l&&(l=o=16383&(h[6]<<8|h[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:c+1,m=p-f+(v-c)/1e4;if(m<0&&void 0===e.clockseq&&(l=l+1&16383),(m<0||p>f)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");f=p,c=v,o=l;var g=(1e4*(268435455&(p+=122192928e5))+v)%4294967296;u[s++]=g>>>24&255,u[s++]=g>>>16&255,u[s++]=g>>>8&255,u[s++]=255&g;var y=p/4294967296*1e4&268435455;u[s++]=y>>>8&255,u[s++]=255&y,u[s++]=y>>>24&15|16,u[s++]=y>>>16&255,u[s++]=l>>>8|128,u[s++]=255&l;for(var b=0;b<6;++b)u[s+b]=d[b];return r||a(u)}},aa18b78f2f1000fc92cc:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.rlphash=r.ripemd160=r.sha256=r.keccak256=r.keccak=void 0;var n=t("75661b07e4f3e7211eca"),o=n.keccak224,i=n.keccak384,a=n.keccak256,f=n.keccak512,c=t("51c14598f89e3eb6cfa8"),s=t("3aad3afd3c29698c953a"),u=t("787b67936387d49cb10d"),d=t("84f5968db8a556f944c9");r.keccak=function(r,t){switch(void 0===t&&(t=256),r="string"!==typeof r||s.isHexString(r)?d.toBuffer(r):e.from(r,"utf8"),t||(t=256),t){case 224:return o(r);case 256:return a(r);case 384:return i(r);case 512:return f(r);default:throw new Error("Invald algorithm: keccak"+t)}},r.keccak256=function(e){return r.keccak(e)},r.sha256=function(e){return e=d.toBuffer(e),c("sha256").update(e).digest()},r.ripemd160=function(e,r){e=d.toBuffer(e);var t=c("rmd160").update(e).digest();return!0===r?d.setLength(t,32):t},r.rlphash=function(e){return r.keccak(u.encode(e))}}).call(this,t("4de17b50d35d24f9c74a").Buffer)},ad4968ace33763ab37e5:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0});var t=e.from([48,129,211,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,133,48,129,130,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,33,2,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,36,3,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),n=e.from([48,130,1,19,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,165,48,129,162,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,65,4,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,72,58,218,119,38,163,196,101,93,164,251,252,14,17,8,168,253,23,180,72,166,133,84,25,156,71,208,143,251,16,212,184,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,68,3,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);r.privateKeyExport=function(r,o,i){void 0===i&&(i=!0);var a=e.from(i?t:n);return r.copy(a,i?8:9),o.copy(a,i?181:214),a},r.privateKeyImport=function(e){var r=e.length,t=0;if(r<t+1||48!==e[t])return null;if(r<(t+=1)+1||!(128&e[t]))return null;var n=127&e[t];if(n<1||n>2)return null;if(r<(t+=1)+n)return null;var o=e[t+n-1]|(n>1?e[t+n-2]<<8:0);return r<(t+=n)+o?null:r<t+3||2!==e[t]||1!==e[t+1]||1!==e[t+2]?null:r<(t+=3)+2||4!==e[t]||e[t+1]>32||r<t+2+e[t+1]?null:e.slice(t+2,t+2+e[t+1])},r.signatureImportLax=function(r){var t=e.alloc(32,0),n=e.alloc(32,0),o=r.length,i=0;if(48!==r[i++])return null;var a=r[i++];if(128&a&&(i+=a-128)>o)return null;if(2!==r[i++])return null;var f=r[i++];if(128&f){if(i+(a=f-128)>o)return null;for(;a>0&&0===r[i];i+=1,a-=1);for(f=0;a>0;i+=1,a-=1)f=(f<<8)+r[i]}if(f>o-i)return null;var c=i;if(i+=f,2!==r[i++])return null;var s=r[i++];if(128&s){if(i+(a=s-128)>o)return null;for(;a>0&&0===r[i];i+=1,a-=1);for(s=0;a>0;i+=1,a-=1)s=(s<<8)+r[i]}if(s>o-i)return null;var u=i;for(i+=s;f>0&&0===r[c];f-=1,c+=1);if(f>32)return null;var d=r.slice(c,c+f);for(d.copy(t,32-d.length);s>0&&0===r[u];s-=1,u+=1);if(s>32)return null;var l=r.slice(u,u+s);return l.copy(n,32-l.length),{r:t,s:n}}}).call(this,t("4de17b50d35d24f9c74a").Buffer)},bc1363eb4f14369c44d0:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),o=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||r.hasOwnProperty(t)||n(r,e,t)};Object.defineProperty(r,"__esModule",{value:!0}),r.secp256k1=r.rlp=r.BN=void 0;var i=t("40cd966eb45ad36829ff");r.secp256k1=i;var a=t("3aad3afd3c29698c953a"),f=t("a07bfecaef33297c14e6");r.BN=f;var c=t("787b67936387d49cb10d");r.rlp=c,Object.assign(r,a),o(t("a180a07ea9f9cccb8404"),r),o(t("7bcd51a3902f3a5cdddd"),r),o(t("aa18b78f2f1000fc92cc"),r),o(t("9218aa99de2de28dec7a"),r),o(t("84f5968db8a556f944c9"),r),o(t("3d02bc8af7b8b598cf7f"),r)},d77c06f6788a1cf4220d:function(e,r){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var o=new Array(16);e.exports=function(){for(var e,r=0;r<16;r++)0===(3&r)&&(e=4294967296*Math.random()),o[r]=e>>>((3&r)<<3)&255;return o}}},eb539fefcb929b7e1b63:function(e,r){for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1);e.exports=function(e,r){var n=r||0,o=t;return[o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]]].join("")}},f80443e3fb9eb61bbd5f:function(e,r,t){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0});var o=t("bc1363eb4f14369c44d0"),i=t("e091fec03cc3fd2a99c1"),a=t("4de17b50d35d24f9c74a"),f=new o.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),c=function(){function e(e,r){if(void 0===e&&(e={}),void 0===r&&(r={}),r.common){if(r.chain||r.hardfork)throw new Error("Instantiation with both opts.common, and opts.chain and opts.hardfork parameter not allowed!");this._common=r.common}else{var t=r.chain?r.chain:"mainnet",n=r.hardfork?r.hardfork:"petersburg";this._common=new i.default(t,n)}var f=[{name:"nonce",length:32,allowLess:!0,default:new a.Buffer([])},{name:"gasPrice",length:32,allowLess:!0,default:new a.Buffer([])},{name:"gasLimit",alias:"gas",length:32,allowLess:!0,default:new a.Buffer([])},{name:"to",allowZero:!0,length:20,default:new a.Buffer([])},{name:"value",length:32,allowLess:!0,default:new a.Buffer([])},{name:"data",alias:"input",allowZero:!0,default:new a.Buffer([])},{name:"v",allowZero:!0,default:new a.Buffer([])},{name:"r",length:32,allowZero:!0,allowLess:!0,default:new a.Buffer([])},{name:"s",length:32,allowZero:!0,allowLess:!0,default:new a.Buffer([])}];o.defineProperties(this,f,e),Object.defineProperty(this,"from",{enumerable:!0,configurable:!0,get:this.getSenderAddress.bind(this)}),this._validateV(this.v),this._overrideVSetterWithValidation()}return e.prototype.toCreationAddress=function(){return""===this.to.toString("hex")},e.prototype.hash=function(e){var r;return void 0===e&&(e=!0),r=e?this.raw:this._implementsEIP155()?this.raw.slice(0,6).concat([o.toBuffer(this.getChainId()),o.stripZeros(o.toBuffer(0)),o.stripZeros(o.toBuffer(0))]):this.raw.slice(0,6),o.rlphash(r)},e.prototype.getChainId=function(){return this._common.chainId()},e.prototype.getSenderAddress=function(){if(this._from)return this._from;var e=this.getSenderPublicKey();return this._from=o.publicToAddress(e),this._from},e.prototype.getSenderPublicKey=function(){if(!this.verifySignature())throw new Error("Invalid Signature");return this._senderPubKey},e.prototype.verifySignature=function(){var e=this.hash(!1);if(this._common.gteHardfork("homestead")&&1===new o.BN(this.s).cmp(f))return!1;try{var r=o.bufferToInt(this.v),t=r>=2*this.getChainId()+35&&this._common.gteHardfork("spuriousDragon");this._senderPubKey=o.ecrecover(e,r,this.r,this.s,t?this.getChainId():void 0)}catch(e){return!1}return!!this._senderPubKey},e.prototype.sign=function(e){this.v=new a.Buffer([]),this.s=new a.Buffer([]),this.r=new a.Buffer([]);var r=this.hash(!1),t=o.ecsign(r,e);this._implementsEIP155()&&(t.v+=2*this.getChainId()+8),Object.assign(this,t)},e.prototype.getDataFee=function(){for(var e=this.raw[5],r=new o.BN(0),t=0;t<e.length;t++)0===e[t]?r.iaddn(this._common.param("gasPrices","txDataZero")):r.iaddn(this._common.param("gasPrices","txDataNonZero"));return r},e.prototype.getBaseFee=function(){var e=this.getDataFee().iaddn(this._common.param("gasPrices","tx"));return this._common.gteHardfork("homestead")&&this.toCreationAddress()&&e.iaddn(this._common.param("gasPrices","txCreation")),e},e.prototype.getUpfrontCost=function(){return new o.BN(this.gasLimit).imul(new o.BN(this.gasPrice)).iadd(new o.BN(this.value))},e.prototype.validate=function(e){void 0===e&&(e=!1);var r=[];return this.verifySignature()||r.push("Invalid Signature"),this.getBaseFee().cmp(new o.BN(this.gasLimit))>0&&r.push(["gas limit is too low. Need at least "+this.getBaseFee()]),!1===e?0===r.length:r.join(" ")},e.prototype.serialize=function(){return o.rlp.encode(this.raw)},e.prototype.toJSON=function(e){return void 0===e&&(e=!1),{}},e.prototype._validateV=function(e){if(void 0!==e&&0!==e.length&&this._common.gteHardfork("spuriousDragon")){var r=o.bufferToInt(e);if(27!==r&&28!==r)if(!(r===2*this.getChainId()+35||r===2*this.getChainId()+36))throw new Error("Incompatible EIP155-based V "+r+" and chain id "+this.getChainId()+". See the second parameter of the Transaction constructor to set the chain id.")}},e.prototype._isSigned=function(){return this.v.length>0&&this.r.length>0&&this.s.length>0},e.prototype._overrideVSetterWithValidation=function(){var e=this,r=Object.getOwnPropertyDescriptor(this,"v");Object.defineProperty(this,"v",n({},r,{set:function(t){void 0!==t&&e._validateV(o.toBuffer(t)),r.set(t)}}))},e.prototype._implementsEIP155=function(){var e=this._common.gteHardfork("spuriousDragon");if(!this._isSigned())return e;var r=o.bufferToInt(this.v);return(r===2*this.getChainId()+35||r===2*this.getChainId()+36)&&e},e}();r.default=c},ffd9b28736209e7a93d2:function(e,r,t){"use strict";var n,o=this&&this.__extends||(n=function(e,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)},function(e,r){function t(){this.constructor=e}n(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)});Object.defineProperty(r,"__esModule",{value:!0});var i=t("bc1363eb4f14369c44d0"),a=t("4de17b50d35d24f9c74a"),f=function(e){function r(r,t){void 0===r&&(r={}),void 0===t&&(t={});var n=e.call(this,r,t)||this;Object.defineProperty(n,"from",{enumerable:!0,configurable:!0,get:function(){return n.getSenderAddress()},set:function(e){e&&(n._from=i.toBuffer(e))}});var o=r;return o.from&&(n.from=i.toBuffer(o.from)),n}return o(r,e),r.prototype.hash=function(r){if(void 0===r&&(r=!0),r&&this._from&&""!==this._from.toString("hex")){var t=a.Buffer.concat([this._from,this._from.slice(0,12)]);this.sign(t)}return e.prototype.hash.call(this,r)},r}(t("f80443e3fb9eb61bbd5f").default);r.default=f}}]);