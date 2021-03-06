/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $send = Opal.send;

  Opal.add_stubs(['$setPrefixes', '$debug', '$=~', '$get_NAME_table', '$get_NAMEtwo_table', '$+', '$to_i', '$last_match', '$rollHit', '$rollDamage', '$roll', '$getHitRollResult', '$>=', '$<=', '$<', '$getRollDamageCritialText', '$empty?', '$join', '$>', '$to_s', '$==', '$collect', '$split', '$sort!', '$clone', '$times', '$shift', '$push', '$pop', '$nil?', '$*', '$**', '$each', '$get_table_by_number']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'TrinitySeven');

    var $nesting = [self].concat($parent_nesting), $TrinitySeven_rollDiceCommand$1, $TrinitySeven_rollHit$2, $TrinitySeven_getHitRollResult$3, $TrinitySeven_rollDamage$4, $TrinitySeven_getRollDamageCritialText$5, $TrinitySeven_check_1D100$9, $TrinitySeven_get_NAME_table$10, $TrinitySeven_get_NAMEtwo_table$11;

    
    Opal.const_set($nesting[0], 'ID', "TrinitySeven");
    Opal.const_set($nesting[0], 'NAME', "トリニティセブンRPG");
    Opal.const_set($nesting[0], 'SORT_KEY', "とりにていせふんRPG");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "クリティカルが変動した命中及び、7の出目がある場合のダメージ計算が行なえます。\n" + "なお、通常の判定としても利用できます。\n" + "\n" + "・発動/命中　［TR(±c*)<=(x）±（y*）又は TR<=(x）など］*は必須ではない項目です。\n" + "\"TR(クリティカルの修正値*)＜＝(発動/命中)±(発動/命中の修正値*)\"\n" + "加算減算のみ修正値も付けられます。 ［修正値］は必須ではありません。\n" + "例）TR<=50\tTR＜＝60＋20\tTR7＜＝40\tTR-7＜＝80\tTR＋10＜＝80＋20\n" + "\n" + "・ダメージ計算　［（x)DM(c*)±(y*）又は（x)DM(c*)又は（x)DM±(y*）］*は必須ではない項目です。\n" + "\"(ダイス数)DM(7の出目の数*)＋(修正*)\"\n" + "加算減算のみ修正値も付けられます。 ［7の出目の数］および［修正値］は必須ではありません。\n" + "例）6DM2+1\t5DM2\t4DM\t\t3DM+3\n" + "後から7の出目に変更する場合はC(7*6＋5)のように入力して計算してください。\n" + "\n" + "・名前表　[TRNAME]\n" + "名字と名前を出します。PCや突然現れたNPCの名付けにどうぞ。\n" + "\n");
    self.$setPrefixes(["(\\d+)DM\\d+(\\+|\\-)?\\d*", "(\\d+)DM(\\+|\\-)?\\d*", "TR(\\d+)<=(\\d+)(\\+|\\-)?\\d*", "TR<=(\\d+)(\\+|\\-)?\\d*", "TR(\\+|\\-)?(\\d+)<=(\\d+)(\\+|\\-)?\\d*", "TRNAME"]);
    
    Opal.def(self, '$rollDiceCommand', $TrinitySeven_rollDiceCommand$1 = function $$rollDiceCommand(command) {
      var $a, $b, self = this, firstName = nil, secondName = nil, critical = nil, target = nil, modify = nil, diceCount = nil;

      
      self.$debug("rollDiceCommand command", command);
      if ($truthy(/TRNAME/['$=~'](command))) {
        
        $b = self.$get_NAME_table(), $a = Opal.to_ary($b), (firstName = ($a[0] == null ? nil : $a[0])), $b;
        $b = self.$get_NAMEtwo_table(), $a = Opal.to_ary($b), (secondName = ($a[0] == null ? nil : $a[0])), $b;
        return "" + (firstName) + " , " + (secondName);};
      if ($truthy(/^TR([\+\-\d]*)<=([\d]*)([\+\-\d]*)/['$=~'](command))) {
        
        critical = $rb_plus($$($nesting, 'Regexp').$last_match(1).$to_i(), 7);
        target = $$($nesting, 'Regexp').$last_match(2).$to_i();
        modify = $$($nesting, 'Regexp').$last_match(3).$to_i();
        return self.$rollHit(command, critical, target, modify);};
      critical = 0;
      if ($truthy(/([\d]*)DM([\d]*)([\+\-\d]*)/['$=~'](command))) {
        
        diceCount = $$($nesting, 'Regexp').$last_match(1).$to_i();
        critical = $$($nesting, 'Regexp').$last_match(2).$to_i();
        modify = $$($nesting, 'Regexp').$last_match(3).$to_i();
        return self.$rollDamage(command, diceCount, critical, modify);};
      return "";
    }, $TrinitySeven_rollDiceCommand$1.$$arity = 1);
    
    Opal.def(self, '$rollHit', $TrinitySeven_rollHit$2 = function $$rollHit(command, critical, target, modify) {
      var $a, $b, self = this, total = nil, diceText = nil, result = nil, text = nil;

      
      target = $rb_plus(target, modify);
      $b = self.$roll(1, 100), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
      result = self.$getHitRollResult(total, target, critical);
      text = "" + "(" + (command) + ") ＞ " + (total) + "[" + (diceText) + "] ＞ " + (result);
      self.$debug("rollDiceCommand result text", text);
      return text;
    }, $TrinitySeven_rollHit$2.$$arity = 4);
    
    Opal.def(self, '$getHitRollResult', $TrinitySeven_getHitRollResult$3 = function $$getHitRollResult(total, target, critical) {
      var self = this;

      
      if ($truthy($rb_ge(total, 96))) {
        return "ファンブル"};
      if ($truthy($rb_le(total, critical))) {
        return "クリティカル"};
      if ($truthy($rb_le(total, target))) {
        return "成功"};
      return "失敗";
    }, $TrinitySeven_getHitRollResult$3.$$arity = 3);
    
    Opal.def(self, '$rollDamage', $TrinitySeven_rollDamage$4 = function $$rollDamage(command, diceCount, critical, modify) {
      var $a, $b, self = this, total = nil, diceText = nil, additionalListText = nil, additionalList = nil, modifyText = nil, text = nil;

      
      if ($truthy($rb_lt(diceCount, critical))) {
        return ""};
      $b = self.$roll(diceCount, 6), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
      additionalListText = "";
      $b = self.$getRollDamageCritialText(diceCount, critical, total, diceText, modify), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), (additionalList = ($a[1] == null ? nil : $a[1])), $b;
      if ($truthy(additionalList['$empty?']())) {
      } else {
        additionalListText = "" + "→[" + (additionalList.$join(",")) + "]"
      };
      modifyText = "";
      if ($truthy($rb_gt(modify, 0))) {
        modifyText = "" + "+" + (modify)};
      if ($truthy($rb_lt(modify, 0))) {
        modifyText = modify.$to_s()};
      text = "" + "(" + (command) + ") [" + (diceText) + "]" + (additionalListText) + (modifyText) + " ＞ " + (total);
      return text;
    }, $TrinitySeven_rollDamage$4.$$arity = 4);
    
    Opal.def(self, '$getRollDamageCritialText', $TrinitySeven_getRollDamageCritialText$5 = function $$getRollDamageCritialText(diceCount, critical, total, diceText, modify) {
      var $$6, $$7, $$8, self = this, diceList = nil, restDice = nil, max = nil;

      
      diceList = [];
      if (critical['$=='](0)) {
        
        total = $rb_plus(total, modify);
        return [total, diceList];};
      diceList = $send(diceText.$split(/,/), 'collect', [], ($$6 = function(i){var self = $$6.$$s || this;

      
        
        if (i == null) {
          i = nil;
        };
        return i.$to_i();}, $$6.$$s = self, $$6.$$arity = 1, $$6));
      diceList['$sort!']();
      restDice = diceList.$clone();
      if ($truthy($rb_gt(critical, diceCount))) {
        critical = diceCount};
      $send(critical, 'times', [], ($$7 = function(){var self = $$7.$$s || this;

      
        restDice.$shift();
        diceList.$shift();
        return diceList.$push(7);}, $$7.$$s = self, $$7.$$arity = 0, $$7));
      max = restDice.$pop();
      if ($truthy(max['$nil?']())) {
        max = 1};
      total = $rb_plus($rb_times(max, (7)['$**'](critical)), modify);
      $send(restDice, 'each', [], ($$8 = function(i){var self = $$8.$$s || this;

      
        
        if (i == null) {
          i = nil;
        };
        return (total = $rb_plus(total, i));}, $$8.$$s = self, $$8.$$arity = 1, $$8));
      return [total, diceList];
    }, $TrinitySeven_getRollDamageCritialText$5.$$arity = 5);
    
    Opal.def(self, '$check_1D100', $TrinitySeven_check_1D100$9 = function $$check_1D100(_total, dice_total, _cmp_op, _target) {
      var self = this;

      if ($truthy($rb_ge(dice_total, 96))) {
        return " ＞ ファンブル"
      } else if ($truthy($rb_le(dice_total, 7))) {
        return " ＞ クリティカル"
      } else {
        return nil
      }
    }, $TrinitySeven_check_1D100$9.$$arity = 4);
    
    Opal.def(self, '$get_NAME_table', $TrinitySeven_get_NAME_table$10 = function $$get_NAME_table() {
      var $a, $b, self = this, table = nil, dice_now = nil;

      
      table = [[1, "春日"], [2, "浅見"], [3, "風間"], [4, "神無月"], [5, "倉田"], [6, "不動"], [7, "山奈"], [8, "シャルロック"], [9, "霧隠"], [10, "果心"], [11, "今井"], [12, "長瀬"], [13, "明智"], [14, "風祭"], [15, "志貫"], [16, "一文字"], [17, "月夜野"], [18, "桜田門"], [19, "果瀬"], [20, "九十九"], [21, "速水"], [22, "片桐"], [23, "葉月"], [24, "ウィンザー"], [25, "時雨里"], [26, "神城"], [27, "水際"], [28, "一ノ江"], [29, "仁藤"], [30, "北千住"], [31, "西村"], [32, "諏訪"], [33, "藤宮"], [34, "御代"], [35, "橘"], [36, "霧生"], [37, "白石"], [38, "椎名"], [39, "綾小路"], [40, "二条"], [41, "光明寺"], [42, "春秋"], [43, "雪見"], [44, "刀条院"], [45, "ランカスター"], [46, "ハクア"], [47, "エルタニア"], [48, "ハーネス"], [49, "アウグストゥス"], [50, "椎名町"], [51, "鍵守"], [52, "茜ヶ崎"], [53, "鎮宮"], [54, "美柳"], [55, "鎖々塚"], [56, "櫻ノ杜"], [57, "鏡ヶ守"], [58, "輝井"], [59, "南陽"], [60, "雪乃城"], [61, "六角屋"], [62, "鈴々"], [63, "東三条"], [64, "朱雀院"], [65, "青龍院"], [66, "白虎院"], [67, "玄武院"], [68, "麒麟院"], [69, "リーシュタット"], [70, "サンクチュアリ"], [71, "六実"], [72, "須藤"], [73, "ミレニアム"], [74, "七里"], [75, "三枝"], [76, "八殿"], [77, "藤里"], [78, "久宝"], [79, "東"], [80, "赤西"], [81, "神ヶ崎"], [82, "グランシア"], [83, "ダークブーレード"], [84, "天光寺"], [85, "月見里"], [86, "璃宮"], [87, "藤見澤"], [88, "赤聖"], [89, "姫宮"], [90, "華ノ宮"], [91, "天才"], [92, "達人"], [93, "賢者"], [94, "疾風"], [95, "海の"], [96, "最強"], [97, "凶器"], [98, "灼熱"], [99, "人間兵器"], [100, "魔王"]];
      $b = self.$roll(1, 100), $a = Opal.to_ary($b), (dice_now = ($a[0] == null ? nil : $a[0])), $b;
      return self.$get_table_by_number(dice_now, table);
    }, $TrinitySeven_get_NAME_table$10.$$arity = 0);
    return (Opal.def(self, '$get_NAMEtwo_table', $TrinitySeven_get_NAMEtwo_table$11 = function $$get_NAMEtwo_table() {
      var $a, $b, self = this, table = nil, dice_now = nil;

      
      table = [[1, "アラタ/聖"], [2, "アビィス/リリス"], [3, "ルーグ/レヴィ"], [4, "ラスト/アリン"], [5, "ソラ/ユイ"], [6, "イーリアス/アキオ"], [7, "アカーシャ/ミラ"], [8, "アリエス/リーゼロッテ"], [9, "ムラサメ/シャルム"], [10, "龍貴/竜姫"], [11, "英樹/春菜"], [12, "準一/湊"], [13, "急司郎/光理"], [14, "夕也/愛奈"], [15, "晴彦/アキ"], [16, "疾風/ヤシロ"], [17, "カガリ/灯花"], [18, "次郎/優都"], [19, "春太郎/静理"], [20, "ジン/時雨"], [21, "イオリ/伊織"], [22, "ユウヒ/優姫"], [23, "サツキ/翠名"], [24, "シュライ/サクラ"], [25, "ミナヅキ/姫乃"], [26, "カエデ/優樹菜"], [27, "ハル/フユ"], [28, "オｄール/瑞江"], [29, "ニトゥレスト/キリカ"], [30, "スカー/綾瀬"], [31, "真夏/小夏"], [32, "光一/ののか"], [33, "彩/翠"], [34, "トウカ/柊花"], [35, "命/ミコト"], [36, "司/つかさ"], [37, "ゆとり/なごみ"], [38, "冬彦/観月"], [39, "カレン/華恋"], [40, "清次郎/亜矢"], [41, "サード/夢子"], [42, "ボックス/詩子"], [43, "ヘリオス/カエデ"], [44, "ゲート/京香"], [45, "オンリー/パトリシア"], [46, "ザッハーク/アーリ"], [47, "ラスタバン/ラスティ"], [48, "桜花/燁澄"], [49, "計都/リヴィア"], [50, "カルヴァリオ/香夜"], [51, "悠人/夜々子"], [52, "太子/羽菜"], [53, "夕立/夕凪"], [54, "アルフ/愛美"], [55, "ファロス/灯利"], [56, "スプートニク/詩姫"], [57, "アーネスト/累"], [58, "ナイン/カグヤ"], [59, "クリア/ヒマワリ"], [60, "ウォーカー/オリビア"], [61, "ダーク/クオン"], [62, "ウェイヴ/凛"], [63, "ルーン/マリエ"], [64, "エンギ/セイギ"], [65, "シラヌイ/ミライ"], [66, "ブライン/キズナ"], [67, "クロウ/カナタ"], [68, "スレイヤー/ヒカル"], [69, "レス/ミリアリア"], [70, "ミフユ/サリエル"], [71, "鳴央/音央"], [72, "モンジ/理亜"], [73, "パルデモントゥム/スナオ"], [74, "ミシェル/詩穂"], [75, "フレンズ/サン"], [76, "サトリ/識"], [77, "ロード/唯花"], [78, "クロノス/久宝"], [79, "フィラデルフィア/冬海"], [80, "ティンダロス/美星"], [81, "勇弥/ユーリス"], [82, "エイト/アンジェラ"], [83, "サタン/ルシエル"], [84, "エース/小波"], [85, "セージ/胡蝶"], [86, "忍/千之"], [87, "重吾/キリコ"], [88, "マイケル/ミホシ"], [89, "カズマ/鶴香"], [90, "ヤマト/エリシエル"], [91, "歴史上の人物の名前（信長、ジャンヌなど）"], [92, "スポーツ選手の名前（ベッカム、沙保里など）"], [93, "学者の名前（ソクラテス、エレナなど）"], [94, "アイドルの名前（タクヤ、聖子など）"], [95, "土地、国、町の名前（イングランド、ワシントンなど）"], [96, "モンスターの名前（ドラゴン、ラミアなど）"], [97, "武器防具の名前（ソード、メイルなど）"], [98, "自然現象の名前（カザンハリケーンなど）"], [99, "機械の名前（洗濯機、テレビなど）"], [100, "目についた物の名前（シャーペン、メガネなど）"]];
      $b = self.$roll(1, 100), $a = Opal.to_ary($b), (dice_now = ($a[0] == null ? nil : $a[0])), $b;
      return self.$get_table_by_number(dice_now, table);
    }, $TrinitySeven_get_NAMEtwo_table$11.$$arity = 0), nil) && 'get_NAMEtwo_table';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
