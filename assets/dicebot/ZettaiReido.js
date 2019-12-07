/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$===', '$to_i', '$last_match', '$roll2DR', '$roll2DarkDice', '$getModInfo', '$getDiffInfo', '$+', '$-', '$getSuccessText', '$getDarkPointResult', '$roll', '$collect', '$split', '$changeDiceToDarkDice', '$==', '$parren_killer', '$<', '$to_s', '$>', '$nil?', '$>=']);
  return (function($base, $super, $parent_nesting) {
    function $ZettaiReido(){};
    var self = $ZettaiReido = $klass($base, $super, 'ZettaiReido', $ZettaiReido);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_ZettaiReido_initialize_1, TMP_ZettaiReido_gameName_2, TMP_ZettaiReido_gameType_3, TMP_ZettaiReido_getHelpMessage_4, TMP_ZettaiReido_changeText_5, TMP_ZettaiReido_rollDiceCommand_6, TMP_ZettaiReido_roll2DR_7, TMP_ZettaiReido_roll2DarkDice_9, TMP_ZettaiReido_changeDiceToDarkDice_10, TMP_ZettaiReido_getModInfo_11, TMP_ZettaiReido_getDiffInfo_12, TMP_ZettaiReido_getDarkPointResult_13, TMP_ZettaiReido_getSuccessText_14;

    
    self.$setPrefixes(["\\d+\\-2DR.*"]);
    
    Opal.defn(self, '$initialize', TMP_ZettaiReido_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_ZettaiReido_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_ZettaiReido_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      return $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_ZettaiReido_initialize_1, false), $zuper, $iter)
    }, TMP_ZettaiReido_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_ZettaiReido_gameName_2 = function $$gameName() {
      var self = this;

      return "絶対隷奴"
    }, TMP_ZettaiReido_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_ZettaiReido_gameType_3 = function $$gameType() {
      var self = this;

      return "ZettaiReido"
    }, TMP_ZettaiReido_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_ZettaiReido_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・判定\n" + "m-2DR+n>=x\n" + "m(基本能力),n(修正値),x(目標値)\n" + "DPの取得の有無も表示されます。\n"
    }, TMP_ZettaiReido_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$changeText', TMP_ZettaiReido_changeText_5 = function $$changeText(string) {
      var self = this;

      return string
    }, TMP_ZettaiReido_changeText_5.$$arity = 1);
    
    Opal.defn(self, '$rollDiceCommand', TMP_ZettaiReido_rollDiceCommand_6 = function $$rollDiceCommand(command) {
      var self = this, baseAvility = nil, modText = nil, diffValue = nil;

      
      if ($truthy(/^(\d+)-2DR([\+\-\d]*)(>=(\d+))?$/i['$==='](command))) {
        } else {
        return nil
      };
      baseAvility = Opal.const_get_relative($nesting, 'Regexp').$last_match(1).$to_i();
      modText = Opal.const_get_relative($nesting, 'Regexp').$last_match(2);
      diffValue = Opal.const_get_relative($nesting, 'Regexp').$last_match(4);
      return self.$roll2DR(baseAvility, modText, diffValue);
    }, TMP_ZettaiReido_rollDiceCommand_6.$$arity = 1);
    
    Opal.defn(self, '$roll2DR', TMP_ZettaiReido_roll2DR_7 = function $$roll2DR(baseAvility, modText, diffValue) {
      var $a, $b, self = this, diceTotal = nil, diceText = nil, darkPoint = nil, mod = nil, diff = nil, diffText = nil, output = nil, total = nil, successText = nil, darkPointText = nil;

      
      $b = self.$roll2DarkDice(), $a = Opal.to_ary($b), (diceTotal = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), (darkPoint = ($a[2] == null ? nil : $a[2])), $b;
      $b = self.$getModInfo(modText), $a = Opal.to_ary($b), (mod = ($a[0] == null ? nil : $a[0])), (modText = ($a[1] == null ? nil : $a[1])), $b;
      $b = self.$getDiffInfo(diffValue), $a = Opal.to_ary($b), (diff = ($a[0] == null ? nil : $a[0])), (diffText = ($a[1] == null ? nil : $a[1])), $b;
      output = "";
      output = $rb_plus(output, "" + "(" + (baseAvility) + "-2DR" + (modText) + (diffText) + ")");
      output = $rb_plus(output, "" + " ＞ " + (baseAvility) + "-" + (diceTotal) + "[" + (diceText) + "]" + (modText));
      total = $rb_plus($rb_minus(baseAvility, diceTotal), mod);
      output = $rb_plus(output, "" + " ＞ " + (total));
      successText = self.$getSuccessText(diceTotal, total, diff);
      output = $rb_plus(output, successText);
      darkPointText = self.$getDarkPointResult(total, diff, darkPoint);
      output = $rb_plus(output, darkPointText);
      return output;
    }, TMP_ZettaiReido_roll2DR_7.$$arity = 3);
    
    Opal.defn(self, '$roll2DarkDice', TMP_ZettaiReido_roll2DarkDice_9 = function $$roll2DarkDice() {
      var $a, $b, TMP_8, self = this, _ = nil, dice_str = nil, dice1 = nil, dice2 = nil, darkDice1 = nil, darkPoint1 = nil, darkDice2 = nil, darkPoint2 = nil, darkPoint = nil, darkTotal = nil, darkDiceText = nil;

      
      $b = self.$roll(2, 6), $a = Opal.to_ary($b), (_ = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
      $b = $send(dice_str.$split(","), 'collect', [], (TMP_8 = function(i){var self = TMP_8.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_8.$$s = self, TMP_8.$$arity = 1, TMP_8)), $a = Opal.to_ary($b), (dice1 = ($a[0] == null ? nil : $a[0])), (dice2 = ($a[1] == null ? nil : $a[1])), $b;
      $b = self.$changeDiceToDarkDice(dice1), $a = Opal.to_ary($b), (darkDice1 = ($a[0] == null ? nil : $a[0])), (darkPoint1 = ($a[1] == null ? nil : $a[1])), $b;
      $b = self.$changeDiceToDarkDice(dice2), $a = Opal.to_ary($b), (darkDice2 = ($a[0] == null ? nil : $a[0])), (darkPoint2 = ($a[1] == null ? nil : $a[1])), $b;
      darkPoint = $rb_plus(darkPoint1, darkPoint2);
      if (darkPoint['$=='](2)) {
        darkPoint = 4};
      darkTotal = $rb_plus(darkDice1, darkDice2);
      darkDiceText = "" + (darkDice1) + "," + (darkDice2);
      return [darkTotal, darkDiceText, darkPoint];
    }, TMP_ZettaiReido_roll2DarkDice_9.$$arity = 0);
    
    Opal.defn(self, '$changeDiceToDarkDice', TMP_ZettaiReido_changeDiceToDarkDice_10 = function $$changeDiceToDarkDice(dice) {
      var self = this, darkPoint = nil, darkDice = nil;

      
      darkPoint = 0;
      darkDice = dice;
      if (dice['$=='](6)) {
        
        darkDice = 0;
        darkPoint = 1;};
      return [darkDice, darkPoint];
    }, TMP_ZettaiReido_changeDiceToDarkDice_10.$$arity = 1);
    
    Opal.defn(self, '$getModInfo', TMP_ZettaiReido_getModInfo_11 = function $$getModInfo(modText) {
      var self = this, value = nil, text = nil;

      
      value = self.$parren_killer("" + "(0" + (modText) + ")").$to_i();
      text = "";
      if ($truthy($rb_lt(value, 0))) {
        text = value.$to_s()
      } else if ($truthy($rb_gt(value, 0))) {
        text = $rb_plus("+", value.$to_s())};
      return [value, text];
    }, TMP_ZettaiReido_getModInfo_11.$$arity = 1);
    
    Opal.defn(self, '$getDiffInfo', TMP_ZettaiReido_getDiffInfo_12 = function $$getDiffInfo(diffValue) {
      var self = this, diffText = nil;

      
      diffText = "";
      if ($truthy(diffValue['$nil?']())) {
        } else {
        
        diffValue = diffValue.$to_i();
        diffText = "" + ">=" + (diffValue.$to_i());
      };
      return [diffValue, diffText];
    }, TMP_ZettaiReido_getDiffInfo_12.$$arity = 1);
    
    Opal.defn(self, '$getDarkPointResult', TMP_ZettaiReido_getDarkPointResult_13 = function $$getDarkPointResult(_total, _diff, darkPoint) {
      var self = this, text = nil;

      
      text = "";
      if ($truthy($rb_gt(darkPoint, 0))) {
        text = "" + " ＞ " + (darkPoint) + "DP"};
      return text;
    }, TMP_ZettaiReido_getDarkPointResult_13.$$arity = 3);
    return (Opal.defn(self, '$getSuccessText', TMP_ZettaiReido_getSuccessText_14 = function $$getSuccessText(diceTotal, total, diff) {
      var self = this, successLevel = nil;

      
      if (diceTotal['$=='](0)) {
        return " ＞ クリティカル"};
      if (diceTotal['$=='](10)) {
        return " ＞ ファンブル"};
      if ($truthy(diff['$nil?']())) {
        diff = 0};
      successLevel = $rb_minus(total, diff);
      if ($truthy($rb_ge(successLevel, 0))) {
        return "" + " ＞ " + (successLevel) + " 成功"};
      return " ＞ 失敗";
    }, TMP_ZettaiReido_getSuccessText_14.$$arity = 3), nil) && 'getSuccessText';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
