/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$===', '$to_i', '$last_match', '$==', '$>', '$checkRoll', '$roll', '$collect', '$split', '$count', '$<=', '$+', '$empty?', '$!=', '$*']);
  return (function($base, $super, $parent_nesting) {
    function $Airgetlamh(){};
    var self = $Airgetlamh = $klass($base, $super, 'Airgetlamh', $Airgetlamh);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Airgetlamh_initialize_1, TMP_Airgetlamh_gameName_2, TMP_Airgetlamh_gameType_3, TMP_Airgetlamh_getHelpMessage_4, TMP_Airgetlamh_rollDiceCommand_5, TMP_Airgetlamh_checkRoll_9;

    def.sortType = nil;
    
    
    Opal.defn(self, '$initialize', TMP_Airgetlamh_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_Airgetlamh_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_Airgetlamh_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_Airgetlamh_initialize_1, false), $zuper, $iter);
      return (self.sortType = 1);
    }, TMP_Airgetlamh_initialize_1.$$arity = 0);
    self.$setPrefixes([["(\\d+)?A(A|L)(\\d+)?((x|\\*)(\\d+)(\\+(\\d+))?)?(C(\\d+))?"]]);
    
    Opal.defn(self, '$gameName', TMP_Airgetlamh_gameName_2 = function $$gameName() {
      var self = this;

      return "朱の孤塔のエアゲトラム"
    }, TMP_Airgetlamh_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_Airgetlamh_gameType_3 = function $$gameType() {
      var self = this;

      return "Airgetlamh"
    }, TMP_Airgetlamh_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_Airgetlamh_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "【Reg2.0『THE ANSWERER』～】\n" + "・調査判定（成功数を表示）：[n]AA[m]\n" + "・命中判定（ダメージ表示）：[n]AA[m]*p[+t][Cx]\n" + "【～Reg1.1『昇華』】\n" + "・調査判定（成功数を表示）：[n]AL[m]\n" + "・命中判定（ダメージ表示）：[n]AL[m]*p\n" + "----------------------------------------\n" + "[]内のコマンドは省略可能。\n" + "\n" + "「n」でダイス数（攻撃回数）を指定。省略時は「2」。\n" + "「m」で目標値を指定。省略時は「6」。\n" + "「p」で威力を指定。「*」は「x」で代用可。\n" + "「+t」でクリティカルトリガーを指定。省略可。\n" + "「Cx」でクリティカル値を指定。省略時は「1」、最大値は「3」、「0」でクリティカル無し。\n" + "\n" + "攻撃力指定で命中判定となり、成功数ではなく、ダメージを結果表示します。\n" + "クリティカルヒットの分だけ、自動で振り足し処理を行います。\n" + "（ALコマンドではクリティカル処理を行いません）\n" + "\n" + "【書式例】\n" + "・AL → 2d10で目標値6の調査判定。\n" + "・5AA7*12 → 5d10で目標値7、威力12の命中判定。\n" + "・AA7x28+5 → 2d10で目標値7、威力28、クリティカルトリガー5の命中判定。\n" + "・9aa5*10C2 → 9d10で目標値5、威力10、クリティカル値2の命中判定。\n" + "・15AAx4c0 → 15d10で目標値6、威力4、クリティカル無しの命中判定。\n"
    }, TMP_Airgetlamh_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$rollDiceCommand', TMP_Airgetlamh_rollDiceCommand_5 = function $$rollDiceCommand(command) {
      var $a, self = this, diceCount = nil, target = nil, damage = nil, criticalTrigger = nil, criticalNumber = nil;

      
      if ($truthy(/(\d+)?A(A|L)(\d+)?((x|\*)(\d+)(\+(\d+))?)?(C(\d+))?$/i['$==='](command))) {
        
        diceCount = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) ? $a : 2).$to_i();
        target = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(3)) ? $a : 6).$to_i();
        damage = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(6)) ? $a : 0).$to_i();
        if (Opal.const_get_relative($nesting, 'Regexp').$last_match(2)['$==']("L")) {
          
          criticalTrigger = 0;
          criticalNumber = 0;
          } else {
          
          criticalTrigger = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(8)) ? $a : 0).$to_i();
          criticalNumber = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(10)) ? $a : 1).$to_i();
        };
        if ($truthy($rb_gt(criticalNumber, 4))) {
          criticalNumber = 3};
        return self.$checkRoll(diceCount, target, damage, criticalTrigger, criticalNumber);};
      return nil;
    }, TMP_Airgetlamh_rollDiceCommand_5.$$arity = 1);
    return (Opal.defn(self, '$checkRoll', TMP_Airgetlamh_checkRoll_9 = function $$checkRoll(diceCount, target, damage, criticalTrigger, criticalNumber) {
      var $a, $b, $c, TMP_6, TMP_7, TMP_8, self = this, totalSuccessCount = nil, totalCriticalCount = nil, text = nil, rollCount = nil, dice = nil, diceText = nil, diceArray = nil, successCount = nil, criticalCount = nil, result = nil, isDamage = nil, totalDamage = nil;

      
      totalSuccessCount = 0;
      totalCriticalCount = 0;
      text = "";
      rollCount = diceCount;
      while ($truthy($rb_gt(rollCount, 0))) {
        
        $c = self.$roll(rollCount, 10, self.sortType), $b = Opal.to_ary($c), (dice = ($b[0] == null ? nil : $b[0])), (diceText = ($b[1] == null ? nil : $b[1])), $c;
        diceArray = $send(diceText.$split(/,/), 'collect', [], (TMP_6 = function(i){var self = TMP_6.$$s || this;
if (i == null) i = nil;
        return i.$to_i()}, TMP_6.$$s = self, TMP_6.$$arity = 1, TMP_6));
        successCount = $send(diceArray, 'count', [], (TMP_7 = function(i){var self = TMP_7.$$s || this;
if (i == null) i = nil;
        return $rb_le(i, target)}, TMP_7.$$s = self, TMP_7.$$arity = 1, TMP_7));
        criticalCount = $send(diceArray, 'count', [], (TMP_8 = function(i){var self = TMP_8.$$s || this;
if (i == null) i = nil;
        return $rb_le(i, criticalNumber)}, TMP_8.$$s = self, TMP_8.$$arity = 1, TMP_8));
        totalSuccessCount = $rb_plus(totalSuccessCount, successCount);
        totalCriticalCount = $rb_plus(totalCriticalCount, criticalCount);
        if ($truthy(text['$empty?']())) {
          } else {
          text = $rb_plus(text, "+")
        };
        text = $rb_plus(text, "" + (successCount) + "[" + (diceText) + "]");
        rollCount = criticalCount;
      };
      result = "";
      isDamage = damage['$!='](0);
      if ($truthy(isDamage)) {
        
        totalDamage = $rb_plus($rb_times(totalSuccessCount, damage), $rb_times(totalCriticalCount, criticalTrigger));
        result = $rb_plus(result, "" + "(" + (diceCount) + "D10<=" + (target) + ") ＞ " + (text) + " ＞ Hits：" + (totalSuccessCount) + "*" + (damage));
        if ($truthy($rb_gt(criticalTrigger, 0))) {
          result = $rb_plus(result, "" + " + Trigger：" + (totalCriticalCount) + "*" + (criticalTrigger))};
        result = $rb_plus(result, "" + " ＞ " + (totalDamage) + "ダメージ");
        } else {
        result = $rb_plus(result, "" + "(" + (diceCount) + "D10<=" + (target) + ") ＞ " + (text) + " ＞ 成功数：" + (totalSuccessCount))
      };
      if ($truthy($rb_gt(totalCriticalCount, 0))) {
        result = $rb_plus(result, "" + " / " + (totalCriticalCount) + "クリティカル")};
      return result;
    }, TMP_Airgetlamh_checkRoll_9.$$arity = 5), nil) && 'checkRoll';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
