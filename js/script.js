var $$ = mdui.$;
var clx$$$$ = [
  "察己则可以知人，察今则可以知古。——《吕氏春秋》",
  "操千曲而后晓声，观千剑而后识器。——刘勰",
  "仓廪实则知礼节，衣食足则知荣辱。——《管子》",
  "采得百花成蜜后，为谁辛苦为谁甜。——罗隐",
  "不以规矩，无以成方园。——孟子",
  "不登高山，不知天之高也；不临深溪，不知地之厚也。——《荀子》",
  "灯火星星，人声杳杳，歌不尽乱世烽火。",
  "博学之，审问之，慎思之，明辨之，笃行之。——《礼记》",
  "博观而约取，厚积而薄发。——苏轼",
  "安得广厦千万间，大庇天下寒士俱欢颜。 —— 杜甫",
  "天变不足畏，祖宗不足法，人言不足恤。——王安石",
  "随风潜入夜，润物细无声。——杜甫",
  "三军可夺帅也，匹夫不可夺志也。——论语",
  "仁者见之谓之仁，智者见之谓之智。——《周易》",
  "穷则独善其身，达则兼善天下。——《孟子》",
  "穷则变，变则通，通则久。——易经",
  "青山遮不住，毕竟东流去。——辛弃疾",
  "青，取之于蓝而青于蓝。——荀子",
  "勤能补拙是良训，一分辛劳一分才。——华罗庚",
  "俏也不争春，只把春来报，待到山花烂漫时，她在丛中笑。——毛泽东",
  "前事不忘，后事之师。——《战国策》",
  "千磨万击还坚劲，任尔东西南北风。——郑板桥",
  "其身正，不令而行；其身不正，虽令不从。——论语",
  "其曲弥高，其和弥寡。——宋玉",
  "皮之不存，毛将焉附？——左传",
  "逆水行舟用力撑，一篙松劲退千寻。古云此日足可惜，吾辈更应惜秒阴。—— 董必武：《题赠〈中学生〉》",
  "木秀于林，风必摧之。——旧唐书",
  "莫愁前路无知己，天下谁人不识君。——高适",
  "路漫漫其修远今，吾将上下而求索。——屈原",
  "流水不腐，户枢不蠹。——吕氏春秋",
  "老骥伏枥，志在千里。烈士暮年，壮心不已。——曹操",
  "君子忧道不忧贫。——论语",
  "君子坦荡荡，小人长戚戚。——孔子",
  "君子成人之美，不成人之恶。——论语",
  "镜破不改光，兰死不改香。——孟郊",
  "见兔而顾犬，未为晚也；亡羊而补牢，未为迟也。——《战国策》",
  "兼听则明，偏信则暗。——《资治通鉴》",
  "祸兮，福之所倚；福兮，锅之所伏。——《老子》",
  "会当凌绝顶，一览众山小。——杜甫",
  "海纳百川，有容乃大；壁立千仞，无欲则刚。——林则徐",
  "海阔凭鱼跃，天高任鸟飞。——古诗诗话",
  "光阴似箭，日月如梭。——明《增广贤文》",
  "工欲善其事，必先利其器。——孔子",
  "发奋忘食，乐以忘优，不知老之将至。——论语",
  "读书百遍，其义自现。——三国志",
  "登山则情满于山，观海则意溢于海。——刘勰",
  "当断不断，反受其乱。——汉书",
  "大直若屈，大巧若拙，大辩若讷。——《老子》",
  "春风放胆来梳柳，夜雨瞒人去润花。——郑板桥",
  "春风得意马蹄疾，一日看尽长安花。——孟郊",
  "撑天一根担日月，拔地千笋写春秋。——郑板桥",
  "沉舟侧畔千帆过，病树前头万木春。——刘禹锡",
  "臣心一片磁针石，不指南方不肯休。——文天祥",
  "长风破浪会有时，直挂云帆济沧海。——李白",
  "差以毫厘，谬以千里。——《汉书》",
  "谁哦愿意孤苦一生，谁愿意孤单度日，若不是情到深处难自禁，又怎回柔肠百转冷无霜",
  "却是无声遣流年，英雄空冢凋去多少红颜。往昔忆尽无新篇，故园难再留眷恋。",
  "浮生如此，别多会少，不如莫遇。",
  "清欢共，紫陌红尘相逢；望苍穹，掠眼繁华谁懂。",
  "身如逆水之舟, 能随心之动乎？",
  "老当益壮，宁移白首之心，穷且益坚，不堕青云之志--王勃"
]; 
/* Gotop */
$$(function () {
  $$(window).on('scroll', function (e) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop !== 0) {
      $$('#gotop').removeClass('mdui-fab-hide');
    } else {
      $$('#gotop').addClass('mdui-fab-hide');
    }
  });
  $$('#gotop').on('click', function (e) {
    (function animateScroll() {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop !== 0) {
        window.requestAnimationFrame(animateScroll);
        window.scrollTo(0, scrollTop - (scrollTop / 5));
      }
    })();
  });
});

/* Dark Mode */
$$.fn.extend({
  longPress: function (fn) {
    var $this = this;
    for (var i = 0; i < $this.length; i++) {
      (function (target) {
        var timeout;
        var start = function (event) {
          timeout = setTimeout(function () {
            fn(event);
          }, 500);
        };
        var end = function (event) {
          clearTimeout(timeout);
        };
        target.addEventListener('mousedown', start, false);
        target.addEventListener('mouseup', end, false);
        target.addEventListener('touchstart', start, false);
        target.addEventListener('touchend', end, false);
      })($this[i]);
    }
  }
});
$$(function(){
  var clxlizhi = document.getElementById('clx-lizhi')
  clxlizhi.innerHTML = clx$$$$[(Math.round(Math.random() * 61) + 1)]
})
$$(function (){
  var switchModeClx = document.getElementById('switch-mode-clx')
  var switchModeClxYue = `<svg t="1635817229563" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5853" width="24" height="24"><path d="M439.04383639 224.33271976a289.43717504 289.43717504 0 0 0-89.06329676 39.44690807c-27.5075319 18.12412161-51.158867 39.64960558-70.96389486 64.57645191-19.79019562 24.92684633-35.31880082 53.25011237-46.62042137 84.97474006C221.10449032 445.05050411 215.45368042 478.01109252 215.45368042 512c0 40.16870887 7.81621301 78.48347702 23.45358166 115.04318192 15.64725682 36.67341315 36.77228986 68.19039996 63.2910532 94.76354538 26.53359488 26.56820206 58.11485196 47.57952611 94.69927585 63.23667111 36.59431134 15.65714501 75.00301286 23.48324474 115.16183354 23.48324475 33.97407594 0 66.85061917-5.56182137 98.62468557-16.89310498 31.76417894-11.32633953 60.10227581-26.77584294 85.01429133-46.65502781 24.87740834-19.77536407 46.43255539-43.46625042 64.57150781-70.96389488a290.15403174 290.15403174 0 0 0 39.43701989-88.98913905c-8.3056532 0.72180079-17.71378249 1.13213991-28.0958481 1.1321392-45.21637032 0-88.35138342-8.85936294-129.45942212-26.46932463-41.1327577-17.71872658-76.62459295-41.50848964-106.44089858-71.27535655C505.84007277 458.54719011 482.10963587 423.01086095 464.42057238 381.91765379 446.7562286 340.81455917 437.94135957 297.65977044 437.94135957 252.4483442c0-10.40184195 0.39550758-19.77536407 1.15685891-28.01674772l-0.049438-0.09887672zM512.02976157 141.21192041c8.32542811 0 16.51242896 0.31146168 24.6054972 0.92944167-16.4036648 35.32374419-24.60549719 72.09603405-24.60549719 110.30698212 0 35.12104668 6.84227598 68.69961578 20.58121076 100.83458258 13.70927096 32.03114601 32.15474243 59.63261126 55.35124448 82.80933769 23.16683898 23.17178306 50.76830423 41.60736635 82.82416923 55.30674985 32.02125855 13.69938351 65.654209 20.60098567 100.78514387 20.60098568 38.23072298 0 75.03267594-8.24138293 110.35147675-24.62032874 0.59326099 8.14250622 0.86517214 16.28006837 0.86517213 24.62032874 0 33.57856837-4.43956893 66.43533597-13.29893256 98.46648269-8.90880166 32.03114601-21.28817928 61.69419283-37.24195443 88.78149743-15.92411206 27.19112615-35.31880082 52.11797247-58.09013296 74.87941716-22.77627549 22.76144395-47.74267309 42.12152555-74.87447306 58.09013223-27.15157487 15.96366261-56.75529553 28.32326532-88.78644152 37.28644905A368.16784419 368.16784419 0 0 1 512.00009921 882.78807959a368.20739474 368.20739474 0 0 1-98.48625832-13.28904439c-32.03609009-8.95824037-61.6249792-21.31784236-88.79138561-37.28150569-27.12685589-15.96860669-52.08336529-35.32868827-74.89919206-58.09013223-22.7515565-22.76144395-42.13635709-47.68829101-58.05058169-74.87941715-15.96366261-27.0922487-28.34304097-56.75529553-37.2518426-88.78149744A367.9354836 367.9354836 0 0 1 141.21201889 512c0-33.57856837 4.4494571-66.43533597 13.30882004-98.46648269 8.90880166-32.03114601 21.28817928-61.69419283 37.25184259-88.78149744 15.91916798-27.19112615 35.29902519-52.11797247 58.0505817-74.87941715 22.81582676-22.86526476 47.77233617-42.22534634 74.89919206-58.09013223C351.89380578 175.81880789 381.4826949 163.36032846 413.51878498 154.50096479A368.20739474 368.20739474 0 0 1 512.00009921 141.21192041h0.02966236z" p-id="5854"></path></svg>`
  var switchModeClxRi = `<svg t="1635819543655" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7988" data-spm-anchor-id="a313x.7781069.0.i32" width="26" height="26"><path d="M270.387022 463.499421A226.484357 226.484357 0 1 1 496.871379 689.983778a226.484357 226.484357 0 0 1-226.484357-226.484357z" fill="#f4ea2a" p-id="7989"></path><path d="M496.12978 823.76825a16.31518 16.31518 0 0 1-8.899189-2.966396L444.959444 790.396292a16.611819 16.611819 0 0 1-3.707996-22.989571 16.760139 16.760139 0 0 1 23.137892-3.856315l33.371958 24.176129 36.190035-22.247972a16.463499 16.463499 0 0 1 16.908458 28.329085l-46.127462 27.735805a16.611819 16.611819 0 0 1-8.602549 2.224797z m193.705678-88.10197a16.463499 16.463499 0 0 1-4.746234-32.482039l41.677868-10.382387 6.674391-40.19467a16.463499 16.463499 0 0 1 32.630359 5.339514l-8.454229 51.318655a16.908459 16.908459 0 0 1-12.310545 13.348784l-52.208574 13.052143zM311.471611 733.738123a12.013905 12.013905 0 0 1-3.263036 0l-51.318656-8.45423a16.463499 16.463499 0 0 1-13.348783-12.310544l-13.052144-52.060255a16.463499 16.463499 0 1 1 31.59212-8.30591l10.382387 41.826188 40.49131 6.526072a16.463499 16.463499 0 0 1-1.483198 32.778679z m187.772885-17.650058a251.253766 251.253766 0 1 1 250.660487-251.253766 251.253766 251.253766 0 0 1-251.105446 251.253766z m0-32.926999a218.326767 218.326767 0 1 0-218.771727-218.326767 218.326767 218.326767 0 0 0 218.326768 218.326767z m-312.954809-156.180765a16.01854 16.01854 0 0 1-14.831981-7.86095l-27.735806-46.275782a16.463499 16.463499 0 0 1 0.741599-18.095017l29.663963-42.271148a16.463499 16.463499 0 0 1 26.697567 19.281576L177.983778 465.279258l22.099652 36.783314a16.463499 16.463499 0 0 1-5.636153 22.544612 14.831981 14.831981 0 0 1-8.15759 2.373117z m625.019699 0a14.831981 14.831981 0 0 1-7.71263-2.373117 16.463499 16.463499 0 0 1-5.636153-22.544612l22.099652-36.783314-23.87949-33.520278a16.16686 16.16686 0 0 1 3.707995-22.841251 16.463499 16.463499 0 0 1 22.989571 3.559675l30.405562 42.271148a16.31518 16.31518 0 0 1 0 18.095017L826.141367 519.119351a16.01854 16.01854 0 0 1-14.831981 7.86095zM338.910776 470.173812a16.463499 16.463499 0 0 1-14.831981-17.501738c3.263036-50.577057 19.429896-90.030127 49.242178-117.469293a185.103129 185.103129 0 0 1 118.655852-43.012746 16.463499 16.463499 0 1 1 1.779838 32.926999c-44.495944 2.373117-76.533024 14.090382-98.780997 34.410197s-35.745075 50.577057-38.563152 95.221321a16.611819 16.611819 0 0 1-17.501738 15.42526zM749.015064 294.414832a16.611819 16.611819 0 0 1-14.831982-13.793743l-7.41599-40.639629-41.677868-10.382387a16.463499 16.463499 0 0 1 8.00927-32.03708l52.208574 13.052144a16.760139 16.760139 0 0 1 12.310545 13.348783l8.454229 51.318656a16.908459 16.908459 0 0 1-13.645423 18.984936z m-504.28737-1.928158a12.310545 12.310545 0 0 1-3.263036 0 16.31518 16.31518 0 0 1-12.013905-20.023175l13.052144-52.208574a16.760139 16.760139 0 0 1 13.348783-12.310545l51.318656-8.30591a16.463499 16.463499 0 1 1 5.191194 32.48204l-40.49131 6.674392-10.382387 41.677867a16.463499 16.463499 0 0 1-16.16686 12.013905z m209.872538-120.287369a16.463499 16.463499 0 0 1-10.234067-29.663963l42.271147-29.663963a16.463499 16.463499 0 0 1 18.095017 0l46.127462 27.735805a16.31518 16.31518 0 0 1 5.636153 22.544612 16.463499 16.463499 0 0 1-22.544611 5.784473l-36.783314-22.247972-32.778679 22.396292a17.056779 17.056779 0 0 1-9.195829 3.114716z" fill="#f4ea2a" p-id="7990" data-spm-anchor-id="a313x.7781069.0.i33" class=""></path></svg>`
  switchModeClx.addEventListener('click',()=>{
    if(localStorage.getItem("mdui-theme-layout-dark")) {
      switchModeClx.innerHTML = switchModeClxYue
      switchModeClx.title = '切换模式-黑暗模式'
      switchModeClx.style.paddingTop = 0
    }else {
      switchModeClx.innerHTML = switchModeClxRi
      switchModeClx.title = '切换模式-光亮模式'
      // switchModeClx.style.paddingTop = '2px'
    }
    clxabc()
  })
  function clxabc(){
    if (!window.matchMedia || !window.matchMedia('(prefers-color-scheme: dark)').matches) {
      if ($$('body').hasClass('mdui-theme-layout-dark')) {
        $$('body').removeClass('mdui-theme-layout-dark');
        localStorage.removeItem('mdui-theme-layout-dark');
      } else {
        $$('body').addClass('mdui-theme-layout-dark');
        localStorage.setItem('mdui-theme-layout-dark', true);
      }
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (e.matches) {
        $$('body').addClass('mdui-theme-layout-dark');
      } else {
        $$('body').removeClass('mdui-theme-layout-dark');
      }
      localStorage.removeItem('mdui-theme-layout-dark');
    });
    var tab = new mdui.Tab('#donate .mdui-tab');
    $$('#donate').on('opened.mdui.dialog', function (e) {
      tab.handleUpdate();
    });
  }
});
/* Drawer State */
$$(function () {
  $$('#sidebar').on('open.mdui.drawer', function (e) {
    localStorage.removeItem('mdui-drawer-close');
  });
  $$('#sidebar').on('close.mdui.drawer', function (e) {
    localStorage.setItem('mdui-drawer-close', true);
  });
});

/* Sidebar Collapse Item State */
$$(function () {
  $$('.mdui-collapse-item').eq(0).on('close.mdui.collapse', function (e) {
    localStorage.removeItem('mdui-collapse-item-0');
  });
  $$('.mdui-collapse-item').eq(0).on('open.mdui.collapse', function (e) {
    localStorage.setItem('mdui-collapse-item-0', true);
  });
  $$('.mdui-collapse-item').eq(1).on('close.mdui.collapse', function (e) {
    localStorage.removeItem('mdui-collapse-item-1');
  });
  $$('.mdui-collapse-item').eq(1).on('open.mdui.collapse', function (e) {
    localStorage.setItem('mdui-collapse-item-1', true);
  });
  $$('.mdui-collapse-item').eq(2).on('close.mdui.collapse', function (e) {
    localStorage.removeItem('mdui-collapse-item-2');
  });
  $$('.mdui-collapse-item').eq(2).on('open.mdui.collapse', function (e) {
    localStorage.setItem('mdui-collapse-item-2', true);
  });
  $$('.mdui-collapse-item').eq(3).on('close.mdui.collapse', function (e) {
    localStorage.removeItem('mdui-collapse-item-3');
  });
  $$('.mdui-collapse-item').eq(3).on('open.mdui.collapse', function (e) {
    localStorage.setItem('mdui-collapse-item-3', true);
  });
});

/* Search */
var searchFunc = function (path, search_id, content_id) {
  $$.ajax({
    url: path,
    dataType: 'xml',
    success: function (xmlResponse) {
      var datas = $$(xmlResponse).map(function () {
        return this.tagName === 'SEARCH' ? this : null;
      }).find('entry').map(function () {
        return {
          title: $$(this).find('title').text(),
          content: $$(this).find('content').text(),
          url: $$(this).find('url').text()
        };
      }).get();
      var $input = $$(search_id)[0];
      var $resultContent = $$(content_id)[0];
      $input.addEventListener('input', function () {
        var str = '<ul class="search-result-list">';
        var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
        $resultContent.innerHTML = '';
        if (this.value.trim().length <= 0) {
          return;
        }
        datas.forEach(function (data) {
          var isMatch = true;
          if (!data.title || data.title.trim() === '') {
            data.title = 'Untitled';
          }
          var orig_data_title = data.title.trim();
          var data_title = orig_data_title.toLowerCase();
          var orig_data_content = data.content.trim().replace(/<[^>]+>/g, '');
          var data_content = orig_data_content.toLowerCase();
          var data_url = data.url;
          var index_title = -1;
          var index_content = -1;
          var first_occur = -1;
          if (data_content !== '') {
            keywords.forEach(function (keyword, i) {
              index_title = data_title.indexOf(keyword);
              index_content = data_content.indexOf(keyword);
              if (index_title < 0 && index_content < 0) {
                isMatch = false;
              } else {
                if (index_content < 0) {
                  index_content = 0;
                }
                if (i == 0) {
                  first_occur = index_content;
                }
              }
            });
          } else {
            isMatch = false;
          }
          if (isMatch) {
            str += '<li><a href="' + data_url + '" class="search-result-title" target="_top">' + orig_data_title + '</a>';
            var content = orig_data_content;
            if (first_occur >= 0) {
              var start = first_occur - 20;
              var end = first_occur + 80;
              if (start < 0) {
                start = 0;
              }
              if (start == 0) {
                end = 100;
              }
              if (end > content.length) {
                end = content.length;
              }
              var match_content = content.substr(start, end);
              keywords.forEach(function (keyword) {
                var regS = new RegExp(keyword, 'gi');
                match_content = match_content.replace(regS, '<em class="search-result-keyword">$&</em>');
              });
              str += '<p class="search-result-content">' + match_content + '...</p>';
            }
            str += '</li>';
          }
        });
        str += '</ul>';
        $resultContent.innerHTML = str;
      });
    }
  });
};
$$(function () {
  var ele = $$('#search .search-form-input')[0];
  $$('#search').on('opened.mdui.dialog', function (e) {
    ele.focus();
  });
  $$(document).on('click', function (e) {
    if ($$(e.target).closest('#search').length <= 0) {
      $$('.search-form-input').val('');
      $$('.search-result').html('');
    }
  });
  var resource = $$('.search-result').attr('data-resource');
  if (resource) searchFunc(resource, '.search-form-input', '.search-result');
});

/* Pace */
/*! pace 1.0.0 */
(function () {
  var AjaxMonitor, Bar, DocumentMonitor, ElementMonitor, ElementTracker, EventLagMonitor, Evented, Events, NoTargetError, Pace, RequestIntercept, SOURCE_KEYS, Scaler, SocketRequestTracker, XHRRequestTracker, animation, avgAmplitude, bar, cancelAnimation, cancelAnimationFrame, defaultOptions, extend, extendNative, getFromDOM, getIntercept, handlePushState, ignoreStack, init, now, options, requestAnimationFrame, result, runAnimation, scalers, shouldIgnoreURL, shouldTrack, source, sources, uniScaler, _WebSocket, _XDomainRequest, _XMLHttpRequest, _i, _intercept, _len, _pushState, _ref, _ref1, _replaceState,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }

      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __indexOf = [].indexOf || function (item) {
      for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) return i;
      }
      return -1;
    };

  defaultOptions = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: true,
    restartOnPushState: true,
    restartOnRequestAfter: 500,
    target: 'body',
    elements: {
      checkInterval: 100,
      selectors: ['body']
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ['GET'],
      trackWebSockets: true,
      ignoreURLs: []
    }
  };

  now = function () {
    var _ref;
    return (_ref = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref : +(new Date);
  };

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  if (requestAnimationFrame == null) {
    requestAnimationFrame = function (fn) {
      return setTimeout(fn, 50);
    };
    cancelAnimationFrame = function (id) {
      return clearTimeout(id);
    };
  }

  runAnimation = function (fn) {
    var last, tick;
    last = now();
    tick = function () {
      var diff;
      diff = now() - last;
      if (diff >= 33) {
        last = now();
        return fn(diff, function () {
          return requestAnimationFrame(tick);
        });
      } else {
        return setTimeout(tick, 33 - diff);
      }
    };
    return tick();
  };

  result = function () {
    var args, key, obj;
    obj = arguments[0], key = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    if (typeof obj[key] === 'function') {
      return obj[key].apply(obj, args);
    } else {
      return obj[key];
    }
  };

  extend = function () {
    var key, out, source, sources, val, _i, _len;
    out = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = sources.length; _i < _len; _i++) {
      source = sources[_i];
      if (source) {
        for (key in source) {
          if (!__hasProp.call(source, key)) continue;
          val = source[key];
          if ((out[key] != null) && typeof out[key] === 'object' && (val != null) && typeof val === 'object') {
            extend(out[key], val);
          } else {
            out[key] = val;
          }
        }
      }
    }
    return out;
  };

  avgAmplitude = function (arr) {
    var count, sum, v, _i, _len;
    sum = count = 0;
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      v = arr[_i];
      sum += Math.abs(v);
      count++;
    }
    return sum / count;
  };

  getFromDOM = function (key, json) {
    var data, e, el;
    if (key == null) {
      key = 'options';
    }
    if (json == null) {
      json = true;
    }
    el = document.querySelector("[data-pace-" + key + "]");
    if (!el) {
      return;
    }
    data = el.getAttribute("data-pace-" + key);
    if (!json) {
      return data;
    }
    try {
      return JSON.parse(data);
    } catch (_error) {
      e = _error;
      return typeof console !== "undefined" && console !== null ? console.error("Error parsing inline pace options", e) : void 0;
    }
  };

  Evented = (function () {
    function Evented() {}

    Evented.prototype.on = function (event, handler, ctx, once) {
      var _base;
      if (once == null) {
        once = false;
      }
      if (this.bindings == null) {
        this.bindings = {};
      }
      if ((_base = this.bindings)[event] == null) {
        _base[event] = [];
      }
      return this.bindings[event].push({
        handler: handler,
        ctx: ctx,
        once: once
      });
    };

    Evented.prototype.once = function (event, handler, ctx) {
      return this.on(event, handler, ctx, true);
    };

    Evented.prototype.off = function (event, handler) {
      var i, _ref, _results;
      if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {
        return;
      }
      if (handler == null) {
        return delete this.bindings[event];
      } else {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    Evented.prototype.trigger = function () {
      var args, ctx, event, handler, i, once, _ref, _ref1, _results;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;
          handler.apply(ctx != null ? ctx : this, args);
          if (once) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    return Evented;

  })();

  Pace = window.Pace || {};

  window.Pace = Pace;

  extend(Pace, Evented.prototype);

  options = Pace.options = extend({}, defaultOptions, window.paceOptions, getFromDOM());

  _ref = ['ajax', 'document', 'eventLag', 'elements'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    source = _ref[_i];
    if (options[source] === true) {
      options[source] = defaultOptions[source];
    }
  }

  NoTargetError = (function (_super) {
    __extends(NoTargetError, _super);

    function NoTargetError() {
      _ref1 = NoTargetError.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    return NoTargetError;

  })(Error);

  Bar = (function () {
    function Bar() {
      this.progress = 0;
    }

    Bar.prototype.getElement = function () {
      var targetElement;
      if (this.el == null) {
        targetElement = document.querySelector(options.target);
        if (!targetElement) {
          throw new NoTargetError;
        }
        this.el = document.createElement('div');
        this.el.className = "pace pace-active";
        document.body.className = document.body.className.replace(/pace-done/g, '');
        document.body.className += ' pace-running';
        this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';
        if (targetElement.firstChild != null) {
          targetElement.insertBefore(this.el, targetElement.firstChild);
        } else {
          targetElement.appendChild(this.el);
        }
      }
      return this.el;
    };

    Bar.prototype.finish = function () {
      var el;
      el = this.getElement();
      el.className = el.className.replace('pace-active', '');
      el.className += ' pace-inactive';
      document.body.className = document.body.className.replace('pace-running', '');
      return document.body.className += ' pace-done';
    };

    Bar.prototype.update = function (prog) {
      this.progress = prog;
      return this.render();
    };

    Bar.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (_error) {
        NoTargetError = _error;
      }
      return this.el = void 0;
    };

    Bar.prototype.render = function () {
      var el, key, progressStr, transform, _j, _len1, _ref2;
      if (document.querySelector(options.target) == null) {
        return false;
      }
      el = this.getElement();
      transform = "translate3d(" + this.progress + "%, 0, 0)";
      _ref2 = ['webkitTransform', 'msTransform', 'transform'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        key = _ref2[_j];
        el.children[0].style[key] = transform;
      }
      if (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) {
        el.children[0].setAttribute('data-progress-text', "" + (this.progress | 0) + "%");
        if (this.progress >= 100) {
          progressStr = '99';
        } else {
          progressStr = this.progress < 10 ? "0" : "";
          progressStr += this.progress | 0;
        }
        el.children[0].setAttribute('data-progress', "" + progressStr);
      }
      return this.lastRenderedProgress = this.progress;
    };

    Bar.prototype.done = function () {
      return this.progress >= 100;
    };

    return Bar;

  })();

  Events = (function () {
    function Events() {
      this.bindings = {};
    }

    Events.prototype.trigger = function (name, val) {
      var binding, _j, _len1, _ref2, _results;
      if (this.bindings[name] != null) {
        _ref2 = this.bindings[name];
        _results = [];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          binding = _ref2[_j];
          _results.push(binding.call(this, val));
        }
        return _results;
      }
    };

    Events.prototype.on = function (name, fn) {
      var _base;
      if ((_base = this.bindings)[name] == null) {
        _base[name] = [];
      }
      return this.bindings[name].push(fn);
    };

    return Events;

  })();

  _XMLHttpRequest = window.XMLHttpRequest;

  _XDomainRequest = window.XDomainRequest;

  _WebSocket = window.WebSocket;

  extendNative = function (to, from) {
    var e, key, val, _results;
    _results = [];
    for (key in from.prototype) {
      try {
        val = from.prototype[key];
        if ((to[key] == null) && typeof val !== 'function') {
          _results.push(to[key] = val);
        } else {
          _results.push(void 0);
        }
      } catch (_error) {
        e = _error;
      }
    }
    return _results;
  };

  ignoreStack = [];

  Pace.ignore = function () {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('ignore');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  Pace.track = function () {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('track');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  shouldTrack = function (method) {
    var _ref2;
    if (method == null) {
      method = 'GET';
    }
    if (ignoreStack[0] === 'track') {
      return 'force';
    }
    if (!ignoreStack.length && options.ajax) {
      if (method === 'socket' && options.ajax.trackWebSockets) {
        return true;
      } else if (_ref2 = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, _ref2) >= 0) {
        return true;
      }
    }
    return false;
  };

  RequestIntercept = (function (_super) {
    __extends(RequestIntercept, _super);

    function RequestIntercept() {
      var monitorXHR,
        _this = this;
      RequestIntercept.__super__.constructor.apply(this, arguments);
      monitorXHR = function (req) {
        var _open;
        _open = req.open;
        return req.open = function (type, url, async) {
          if (shouldTrack(type)) {
            _this.trigger('request', {
              type: type,
              url: url,
              request: req
            });
          }
          return _open.apply(req, arguments);
        };
      };
      window.XMLHttpRequest = function (flags) {
        var req;
        req = new _XMLHttpRequest(flags);
        monitorXHR(req);
        return req;
      };
      try {
        extendNative(window.XMLHttpRequest, _XMLHttpRequest);
      } catch (_error) {}
      if (_XDomainRequest != null) {
        window.XDomainRequest = function () {
          var req;
          req = new _XDomainRequest;
          monitorXHR(req);
          return req;
        };
        try {
          extendNative(window.XDomainRequest, _XDomainRequest);
        } catch (_error) {}
      }
      if ((_WebSocket != null) && options.ajax.trackWebSockets) {
        window.WebSocket = function (url, protocols) {
          var req;
          if (protocols != null) {
            req = new _WebSocket(url, protocols);
          } else {
            req = new _WebSocket(url);
          }
          if (shouldTrack('socket')) {
            _this.trigger('request', {
              type: 'socket',
              url: url,
              protocols: protocols,
              request: req
            });
          }
          return req;
        };
        try {
          extendNative(window.WebSocket, _WebSocket);
        } catch (_error) {}
      }
    }

    return RequestIntercept;

  })(Events);

  _intercept = null;

  getIntercept = function () {
    if (_intercept == null) {
      _intercept = new RequestIntercept;
    }
    return _intercept;
  };

  shouldIgnoreURL = function (url) {
    var pattern, _j, _len1, _ref2;
    _ref2 = options.ajax.ignoreURLs;
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      pattern = _ref2[_j];
      if (typeof pattern === 'string') {
        if (url.indexOf(pattern) !== -1) {
          return true;
        }
      } else {
        if (pattern.test(url)) {
          return true;
        }
      }
    }
    return false;
  };

  getIntercept().on('request', function (_arg) {
    var after, args, request, type, url;
    type = _arg.type, request = _arg.request, url = _arg.url;
    if (shouldIgnoreURL(url)) {
      return;
    }
    if (!Pace.running && (options.restartOnRequestAfter !== false || shouldTrack(type) === 'force')) {
      args = arguments;
      after = options.restartOnRequestAfter || 0;
      if (typeof after === 'boolean') {
        after = 0;
      }
      return setTimeout(function () {
        var stillActive, _j, _len1, _ref2, _ref3, _results;
        if (type === 'socket') {
          stillActive = request.readyState < 2;
        } else {
          stillActive = (0 < (_ref2 = request.readyState) && _ref2 < 4);
        }
        if (stillActive) {
          Pace.restart();
          _ref3 = Pace.sources;
          _results = [];
          for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
            source = _ref3[_j];
            if (source instanceof AjaxMonitor) {
              source.watch.apply(source, args);
              break;
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      }, after);
    }
  });

  AjaxMonitor = (function () {
    function AjaxMonitor() {
      var _this = this;
      this.elements = [];
      getIntercept().on('request', function () {
        return _this.watch.apply(_this, arguments);
      });
    }

    AjaxMonitor.prototype.watch = function (_arg) {
      var request, tracker, type, url;
      type = _arg.type, request = _arg.request, url = _arg.url;
      if (shouldIgnoreURL(url)) {
        return;
      }
      if (type === 'socket') {
        tracker = new SocketRequestTracker(request);
      } else {
        tracker = new XHRRequestTracker(request);
      }
      return this.elements.push(tracker);
    };

    return AjaxMonitor;

  })();

  XHRRequestTracker = (function () {
    function XHRRequestTracker(request) {
      var event, size, _j, _len1, _onreadystatechange, _ref2,
        _this = this;
      this.progress = 0;
      if (window.ProgressEvent != null) {
        size = null;
        request.addEventListener('progress', function (evt) {
          if (evt.lengthComputable) {
            return _this.progress = 100 * evt.loaded / evt.total;
          } else {
            return _this.progress = _this.progress + (100 - _this.progress) / 2;
          }
        }, false);
        _ref2 = ['load', 'abort', 'timeout', 'error'];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          event = _ref2[_j];
          request.addEventListener(event, function () {
            return _this.progress = 100;
          }, false);
        }
      } else {
        _onreadystatechange = request.onreadystatechange;
        request.onreadystatechange = function () {
          var _ref3;
          if ((_ref3 = request.readyState) === 0 || _ref3 === 4) {
            _this.progress = 100;
          } else if (request.readyState === 3) {
            _this.progress = 50;
          }
          return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
        };
      }
    }

    return XHRRequestTracker;

  })();

  SocketRequestTracker = (function () {
    function SocketRequestTracker(request) {
      var event, _j, _len1, _ref2,
        _this = this;
      this.progress = 0;
      _ref2 = ['error', 'open'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        event = _ref2[_j];
        request.addEventListener(event, function () {
          return _this.progress = 100;
        }, false);
      }
    }

    return SocketRequestTracker;

  })();

  ElementMonitor = (function () {
    function ElementMonitor(options) {
      var selector, _j, _len1, _ref2;
      if (options == null) {
        options = {};
      }
      this.elements = [];
      if (options.selectors == null) {
        options.selectors = [];
      }
      _ref2 = options.selectors;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        selector = _ref2[_j];
        this.elements.push(new ElementTracker(selector));
      }
    }

    return ElementMonitor;

  })();

  ElementTracker = (function () {
    function ElementTracker(selector) {
      this.selector = selector;
      this.progress = 0;
      this.check();
    }

    ElementTracker.prototype.check = function () {
      var _this = this;
      if (document.querySelector(this.selector)) {
        return this.done();
      } else {
        return setTimeout((function () {
          return _this.check();
        }), options.elements.checkInterval);
      }
    };

    ElementTracker.prototype.done = function () {
      return this.progress = 100;
    };

    return ElementTracker;

  })();

  DocumentMonitor = (function () {
    DocumentMonitor.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    };

    function DocumentMonitor() {
      var _onreadystatechange, _ref2,
        _this = this;
      this.progress = (_ref2 = this.states[document.readyState]) != null ? _ref2 : 100;
      _onreadystatechange = document.onreadystatechange;
      document.onreadystatechange = function () {
        if (_this.states[document.readyState] != null) {
          _this.progress = _this.states[document.readyState];
        }
        return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
      };
    }

    return DocumentMonitor;

  })();

  EventLagMonitor = (function () {
    function EventLagMonitor() {
      var avg, interval, last, points, samples,
        _this = this;
      this.progress = 0;
      avg = 0;
      samples = [];
      points = 0;
      last = now();
      interval = setInterval(function () {
        var diff;
        diff = now() - last - 50;
        last = now();
        samples.push(diff);
        if (samples.length > options.eventLag.sampleCount) {
          samples.shift();
        }
        avg = avgAmplitude(samples);
        if (++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold) {
          _this.progress = 100;
          return clearInterval(interval);
        } else {
          return _this.progress = 100 * (3 / (avg + 3));
        }
      }, 50);
    }

    return EventLagMonitor;

  })();

  Scaler = (function () {
    function Scaler(source) {
      this.source = source;
      this.last = this.sinceLastUpdate = 0;
      this.rate = options.initialRate;
      this.catchup = 0;
      this.progress = this.lastProgress = 0;
      if (this.source != null) {
        this.progress = result(this.source, 'progress');
      }
    }

    Scaler.prototype.tick = function (frameTime, val) {
      var scaling;
      if (val == null) {
        val = result(this.source, 'progress');
      }
      if (val >= 100) {
        this.done = true;
      }
      if (val === this.last) {
        this.sinceLastUpdate += frameTime;
      } else {
        if (this.sinceLastUpdate) {
          this.rate = (val - this.last) / this.sinceLastUpdate;
        }
        this.catchup = (val - this.progress) / options.catchupTime;
        this.sinceLastUpdate = 0;
        this.last = val;
      }
      if (val > this.progress) {
        this.progress += this.catchup * frameTime;
      }
      scaling = 1 - Math.pow(this.progress / 100, options.easeFactor);
      this.progress += scaling * this.rate * frameTime;
      this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress);
      this.progress = Math.max(0, this.progress);
      this.progress = Math.min(100, this.progress);
      this.lastProgress = this.progress;
      return this.progress;
    };

    return Scaler;

  })();

  sources = null;

  scalers = null;

  bar = null;

  uniScaler = null;

  animation = null;

  cancelAnimation = null;

  Pace.running = false;

  handlePushState = function () {
    if (options.restartOnPushState) {
      return Pace.restart();
    }
  };

  if (window.history.pushState != null) {
    _pushState = window.history.pushState;
    window.history.pushState = function () {
      handlePushState();
      return _pushState.apply(window.history, arguments);
    };
  }

  if (window.history.replaceState != null) {
    _replaceState = window.history.replaceState;
    window.history.replaceState = function () {
      handlePushState();
      return _replaceState.apply(window.history, arguments);
    };
  }

  SOURCE_KEYS = {
    ajax: AjaxMonitor,
    elements: ElementMonitor,
    document: DocumentMonitor,
    eventLag: EventLagMonitor
  };

  (init = function () {
    var type, _j, _k, _len1, _len2, _ref2, _ref3, _ref4;
    Pace.sources = sources = [];
    _ref2 = ['ajax', 'elements', 'document', 'eventLag'];
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      type = _ref2[_j];
      if (options[type] !== false) {
        sources.push(new SOURCE_KEYS[type](options[type]));
      }
    }
    _ref4 = (_ref3 = options.extraSources) != null ? _ref3 : [];
    for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
      source = _ref4[_k];
      sources.push(new source(options));
    }
    Pace.bar = bar = new Bar;
    scalers = [];
    return uniScaler = new Scaler;
  })();

  Pace.stop = function () {
    Pace.trigger('stop');
    Pace.running = false;
    bar.destroy();
    cancelAnimation = true;
    if (animation != null) {
      if (typeof cancelAnimationFrame === "function") {
        cancelAnimationFrame(animation);
      }
      animation = null;
    }
    return init();
  };

  Pace.restart = function () {
    Pace.trigger('restart');
    Pace.stop();
    return Pace.start();
  };

  Pace.go = function () {
    var start;
    Pace.running = true;
    bar.render();
    start = now();
    cancelAnimation = false;
    return animation = runAnimation(function (frameTime, enqueueNextFrame) {
      var avg, count, done, element, elements, i, j, remaining, scaler, scalerList, sum, _j, _k, _len1, _len2, _ref2;
      remaining = 100 - bar.progress;
      count = sum = 0;
      done = true;
      for (i = _j = 0, _len1 = sources.length; _j < _len1; i = ++_j) {
        source = sources[i];
        scalerList = scalers[i] != null ? scalers[i] : scalers[i] = [];
        elements = (_ref2 = source.elements) != null ? _ref2 : [source];
        for (j = _k = 0, _len2 = elements.length; _k < _len2; j = ++_k) {
          element = elements[j];
          scaler = scalerList[j] != null ? scalerList[j] : scalerList[j] = new Scaler(element);
          done &= scaler.done;
          if (scaler.done) {
            continue;
          }
          count++;
          sum += scaler.tick(frameTime);
        }
      }
      avg = sum / count;
      bar.update(uniScaler.tick(frameTime, avg));
      if (bar.done() || done || cancelAnimation) {
        bar.update(100);
        Pace.trigger('done');
        return setTimeout(function () {
          bar.finish();
          Pace.running = false;
          return Pace.trigger('hide');
        }, Math.max(options.ghostTime, Math.max(options.minTime - (now() - start), 0)));
      } else {
        return enqueueNextFrame();
      }
    });
  };

  Pace.start = function (_options) {
    extend(options, _options);
    Pace.running = true;
    try {
      bar.render();
    } catch (_error) {
      NoTargetError = _error;
    }
    if (!document.querySelector('.pace')) {
      return setTimeout(Pace.start, 50);
    } else {
      Pace.trigger('start');
      return Pace.go();
    }
  };

  if (typeof define === 'function' && define.amd) {
    define(function () {
      return Pace;
    });
  } else if (typeof exports === 'object') {
    module.exports = Pace;
  } else {
    if (options.startOnPageLoad) {
      Pace.start();
    }
  }

}).call(this);