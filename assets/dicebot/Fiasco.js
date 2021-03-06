/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $send = Opal.send;

  Opal.add_stubs(['$setPrefixes', '$match', '$[]', '$==', '$makeStartDiceRoll', '$makeWhiteBlackDiceRoll', '$roll', '$each', '$split', '$-', '$to_i', '$+', '$[]=', '$makeArgsDiceRoll', '$>', '$<']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'Fiasco');

    var $nesting = [self].concat($parent_nesting), $Fiasco_rollDiceCommand$1, $Fiasco_makeStartDiceRoll$2, $Fiasco_makeWhiteBlackDiceRoll$4, $Fiasco_makeArgsDiceRoll$5;

    
    Opal.const_set($nesting[0], 'ID', "Fiasco");
    Opal.const_set($nesting[0], 'NAME', "フィアスコ");
    Opal.const_set($nesting[0], 'SORT_KEY', "ふいあすこ");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "  ・判定コマンド(FSx, WxBx)\n" + "    相関図・転落要素用(FSx)：相関図や転落要素のためにx個ダイスを振り、出目ごとに分類する\n" + "    黒白差分判定用(WxBx)  ：転落、残響のために白ダイス(W指定)と黒ダイス(B指定)で差分を求める\n" + "      ※ WとBは片方指定(Bx, Wx)、入替指定(WxBx,BxWx)可能\n" + "\n");
    Opal.const_set($nesting[0], 'COMMAND_TYPE_INDEX', 1);
    Opal.const_set($nesting[0], 'START_DICE_INDEX', 2);
    Opal.const_set($nesting[0], 'BW_FIRST_DICE_INDEX', 2);
    Opal.const_set($nesting[0], 'BW_SECOND_DICE_INDEX', 5);
    Opal.const_set($nesting[0], 'BW_SECOND_DICE_TAG_INDEX', 4);
    Opal.const_set($nesting[0], 'START_COMMAND_TAG', "FS");
    Opal.const_set($nesting[0], 'W_DICEROLL_COMMAND_TAG', "W");
    Opal.const_set($nesting[0], 'B_DICEROLL_COMMAND_TAG', "B");
    self.$setPrefixes(["(FS|[WB])(\\d+).*"]);
    
    Opal.def(self, '$rollDiceCommand', $Fiasco_rollDiceCommand$1 = function $$rollDiceCommand(command) {
      var self = this, m = nil, type = nil;

      
      m = /^(FS|[WB])(\d+)(([WB])(\d+))?/.$match(command);
      if ($truthy(m)) {
      } else {
        return ""
      };
      type = m['$[]']($$($nesting, 'COMMAND_TYPE_INDEX'));
      if (type['$==']($$($nesting, 'START_COMMAND_TAG'))) {
        return self.$makeStartDiceRoll(m)
      } else {
        return self.$makeWhiteBlackDiceRoll(type, m)
      };
    }, $Fiasco_rollDiceCommand$1.$$arity = 1);
    
    Opal.def(self, '$makeStartDiceRoll', $Fiasco_makeStartDiceRoll$2 = function $$makeStartDiceRoll(m) {
      var $a, $b, $$3, self = this, dice = nil, _ = nil, diceText = nil, diceList = nil;

      
      dice = m['$[]']($$($nesting, 'START_DICE_INDEX'));
      $b = self.$roll(dice, 6), $a = Opal.to_ary($b), (_ = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
      diceList = [0, 0, 0, 0, 0, 0];
      $send(diceText.$split(","), 'each', [], ($$3 = function(takeDice){var self = $$3.$$s || this, $writer = nil;

      
        
        if (takeDice == null) {
          takeDice = nil;
        };
        $writer = [$rb_minus(takeDice.$to_i(), 1), $rb_plus(diceList['$[]']($rb_minus(takeDice.$to_i(), 1)), 1)];
        $send(diceList, '[]=', Opal.to_a($writer));
        return $writer[$rb_minus($writer["length"], 1)];}, $$3.$$s = self, $$3.$$arity = 1, $$3));
      return "" + "１ => " + (diceList['$[]'](0)) + "個 ２ => " + (diceList['$[]'](1)) + "個 ３ => " + (diceList['$[]'](2)) + "個 ４ => " + (diceList['$[]'](3)) + "個 ５ => " + (diceList['$[]'](4)) + "個 ６ => " + (diceList['$[]'](5)) + "個";
    }, $Fiasco_makeStartDiceRoll$2.$$arity = 1);
    
    Opal.def(self, '$makeWhiteBlackDiceRoll', $Fiasco_makeWhiteBlackDiceRoll$4 = function $$makeWhiteBlackDiceRoll(type, m) {
      var $a, $b, self = this, whiteTotal = nil, whiteDiceText = nil, blackTotal = nil, blackDiceText = nil, result = nil;

      
      if (type['$==']($$($nesting, 'W_DICEROLL_COMMAND_TAG'))) {
        
        $b = self.$makeArgsDiceRoll(m['$[]']($$($nesting, 'BW_FIRST_DICE_INDEX')), m['$[]']($$($nesting, 'BW_SECOND_DICE_INDEX'))), $a = Opal.to_ary($b), (whiteTotal = ($a[0] == null ? nil : $a[0])), (whiteDiceText = ($a[1] == null ? nil : $a[1])), (blackTotal = ($a[2] == null ? nil : $a[2])), (blackDiceText = ($a[3] == null ? nil : $a[3])), $b;
        result = "" + "白" + (whiteTotal) + "[" + (whiteDiceText) + "]";
        if ($truthy(blackDiceText)) {
          
          if (m['$[]']($$($nesting, 'BW_SECOND_DICE_TAG_INDEX'))['$==']($$($nesting, 'W_DICEROLL_COMMAND_TAG'))) {
            return "" + (m) + "：白指定(" + ($$($nesting, 'W_DICEROLL_COMMAND_TAG')) + ")は重複できません。"};
          result = $rb_plus(result, "" + " 黒" + (blackTotal) + "[" + (blackDiceText) + "]");};
      } else if (type['$==']($$($nesting, 'B_DICEROLL_COMMAND_TAG'))) {
        
        $b = self.$makeArgsDiceRoll(m['$[]']($$($nesting, 'BW_FIRST_DICE_INDEX')), m['$[]']($$($nesting, 'BW_SECOND_DICE_INDEX'))), $a = Opal.to_ary($b), (blackTotal = ($a[0] == null ? nil : $a[0])), (blackDiceText = ($a[1] == null ? nil : $a[1])), (whiteTotal = ($a[2] == null ? nil : $a[2])), (whiteDiceText = ($a[3] == null ? nil : $a[3])), $b;
        result = "" + "黒" + (blackTotal) + "[" + (blackDiceText) + "]";
        if ($truthy(whiteDiceText)) {
          
          if (m['$[]']($$($nesting, 'BW_SECOND_DICE_TAG_INDEX'))['$==']($$($nesting, 'B_DICEROLL_COMMAND_TAG'))) {
            return "" + (m) + "：黒指定(" + ($$($nesting, 'B_DICEROLL_COMMAND_TAG')) + ")は重複できません。"};
          result = $rb_plus(result, "" + " 白" + (whiteTotal) + "[" + (whiteDiceText) + "]");};
      } else {
        return ""
      };
      if ($truthy($rb_gt(blackTotal, whiteTotal))) {
        return "" + (result) + " ＞ 黒" + ($rb_minus(blackTotal, whiteTotal))
      } else if ($truthy($rb_lt(blackTotal, whiteTotal))) {
        return "" + (result) + " ＞ 白" + ($rb_minus(whiteTotal, blackTotal))};
      return "" + (result) + " ＞ 0";
    }, $Fiasco_makeWhiteBlackDiceRoll$4.$$arity = 2);
    return (Opal.def(self, '$makeArgsDiceRoll', $Fiasco_makeArgsDiceRoll$5 = function $$makeArgsDiceRoll(firstDice, secondDice) {
      var $a, $b, self = this, secondTotal = nil, firstTotal = nil, firstDiceText = nil, secondDiceText = nil;

      
      secondTotal = 0;
      $b = self.$roll(firstDice, 6), $a = Opal.to_ary($b), (firstTotal = ($a[0] == null ? nil : $a[0])), (firstDiceText = ($a[1] == null ? nil : $a[1])), $b;
      if ($truthy(secondDice)) {
        if ($truthy($rb_gt(secondDice.$to_i(), 0))) {
          $b = self.$roll(secondDice, 6), $a = Opal.to_ary($b), (secondTotal = ($a[0] == null ? nil : $a[0])), (secondDiceText = ($a[1] == null ? nil : $a[1])), $b
        } else {
          secondDiceText = "0"
        }};
      return [firstTotal, firstDiceText, secondTotal, secondDiceText];
    }, $Fiasco_makeArgsDiceRoll$5.$$arity = 2), nil) && 'makeArgsDiceRoll';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
