const _0x4e458c=_0x3c6b;(function(_0x5a4436,_0x173a6f){const _0xb1d2a1=_0x3c6b,_0x92998c=_0x5a4436();while(!![]){try{const _0xb2e487=parseInt(_0xb1d2a1(0xbc))/0x1*(-parseInt(_0xb1d2a1(0xb6))/0x2)+parseInt(_0xb1d2a1(0xa7))/0x3+-parseInt(_0xb1d2a1(0xb9))/0x4+-parseInt(_0xb1d2a1(0xc8))/0x5*(-parseInt(_0xb1d2a1(0xc0))/0x6)+parseInt(_0xb1d2a1(0xc3))/0x7+parseInt(_0xb1d2a1(0xc4))/0x8*(-parseInt(_0xb1d2a1(0xb0))/0x9)+-parseInt(_0xb1d2a1(0xc7))/0xa*(-parseInt(_0xb1d2a1(0xac))/0xb);if(_0xb2e487===_0x173a6f)break;else _0x92998c['push'](_0x92998c['shift']());}catch(_0x4f77ad){_0x92998c['push'](_0x92998c['shift']());}}}(_0x48a5,0x3589f));function _0x3c6b(_0x44feeb,_0x527185){const _0x48a56f=_0x48a5();return _0x3c6b=function(_0x3c6b48,_0x1a4e76){_0x3c6b48=_0x3c6b48-0xa6;let _0x1b1070=_0x48a56f[_0x3c6b48];return _0x1b1070;},_0x3c6b(_0x44feeb,_0x527185);}const winston=require(_0x4e458c(0xba)),{ColorTheme}=require(_0x4e458c(0xb1)),colors=new ColorTheme(),customLevels={'levels':{'error':0x0,'warn':0x1,'info':0x2,'success':0x3,'custom':0x4},'colors':{'error':_0x4e458c(0xaa),'warn':_0x4e458c(0xb3),'info':_0x4e458c(0xab),'success':_0x4e458c(0xbb),'custom':_0x4e458c(0xa9)}},padLevel=_0x229814=>{const _0x381fad=_0x4e458c,_0x1be89d=0x7;return _0x229814[_0x381fad(0xaf)]()[_0x381fad(0xc5)](_0x1be89d);},customFormat=winston['format']['combine'](winston[_0x4e458c(0xbe)][_0x4e458c(0xa6)]({'format':_0x4e458c(0xb5)}),winston['format'][_0x4e458c(0xc9)](({timestamp:_0x3eda23,level:_0x49a600,message:_0x129d3b})=>{const _0x5aba16=_0x4e458c,_0x49d745={'error':colors['colors']['error'],'warn':colors[_0x5aba16(0xb7)][_0x5aba16(0xc2)],'info':colors['colors'][_0x5aba16(0xbf)],'success':colors[_0x5aba16(0xb7)][_0x5aba16(0xb2)],'custom':colors[_0x5aba16(0xb7)][_0x5aba16(0xae)]},_0x5c9f45=''+colors[_0x5aba16(0xb8)]['dim']+_0x3eda23+colors[_0x5aba16(0xb7)][_0x5aba16(0xbd)],_0x496ad0=''+_0x49d745[_0x49a600]+padLevel(_0x49a600)+colors[_0x5aba16(0xb7)][_0x5aba16(0xbd)];return _0x5c9f45+_0x5aba16(0xc1)+_0x496ad0+_0x5aba16(0xc1)+_0x129d3b;})),logger=winston['createLogger']({'levels':customLevels[_0x4e458c(0xad)],'level':_0x4e458c(0xa8),'format':customFormat,'transports':[new winston['transports'][(_0x4e458c(0xc6))]()]});winston[_0x4e458c(0xb4)](customLevels[_0x4e458c(0xb7)]),module[_0x4e458c(0xca)]={'logger':logger};function _0x48a5(){const _0x1e66f8=['1384789ZJJLkx','361288aQFRCB','padEnd','Console','1805370UIPBgs','1152230BNyBhI','printf','exports','timestamp','293715NYLoeH','custom','magenta','red','cyan','22SWbzWr','levels','highlight','toUpperCase','54TbxAgQ','./colors','success','yellow','addColors','YYYY-MM-DD\x20HH:mm:ss','2zHzJNs','colors','baseColors','801492VgVpZE','winston','green','196618lxMwDj','reset','format','info','6oRQZDt','\x20|\x20','warning'];_0x48a5=function(){return _0x1e66f8;};return _0x48a5();}
