/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$debug', '$===', '$to_i', '$last_match', '$checkRoll', '$empty?', '$getValue', '$<', '$>', '$+', '$roll', '$sort', '$collect', '$split', '$join', '$getRollResultString', '$getSuccessInfo', '$isDragonDice', '$[]', '$!=', '$>=', '$getDiceCountHash', '$each', '$<<', '$<=', '$size', '$*', '$inject', '$new', '$isNomalDice', '$==', '$[]=', '$-', '$!']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'Utakaze');

    var $nesting = [self].concat($parent_nesting), $Utakaze_initialize$1, $Utakaze_isGetOriginalMessage$2, $Utakaze_rollDiceCommand$3, $Utakaze_checkRoll$4, $Utakaze_getRollResultString$6, $Utakaze_getSuccessInfo$7, $Utakaze_getDiceCountHash$9, $Utakaze_isNomalDice$11, $Utakaze_isDragonDice$12, $Utakaze_getValue$13;

    self.$$prototype.arrayDragonDiceName = nil;
    
    Opal.const_set($nesting[0], 'ID', "Utakaze");
    Opal.const_set($nesting[0], 'NAME', "ウタカゼ");
    Opal.const_set($nesting[0], 'SORT_KEY', "うたかせ");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・行為判定ロール（nUK）\n" + "  n個のサイコロで行為判定ロール。ゾロ目の最大個数を成功レベルとして表示。nを省略すると2UK扱い。\n" + "  例）3UK ：サイコロ3個で行為判定\n" + "  例）UK  ：サイコロ2個で行為判定\n" + "  不等号用いた成否判定は現時点では実装してません。\n" + "・クリティカルコール付き行為判定ロール（nUK@c or nUKc）\n" + "　cに「龍のダイス目」を指定した行為判定ロール。\n" + "  ゾロ目ではなく、cと同じ値の出目数x2が成功レベルとなります。\n" + "  例）3UK@5 ：龍のダイス「月」でクリティカルコール宣言したサイコロ3個の行為判定\n");
    self.$setPrefixes(["\\d*UK[@\\d]*.*"]);
    
    Opal.def(self, '$initialize', $Utakaze_initialize$1 = function $$initialize() {
      var $iter = $Utakaze_initialize$1.$$p, $yield = $iter || nil, self = this, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) $Utakaze_initialize$1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', $Utakaze_initialize$1, false), $zuper, $iter);
      return (self.arrayDragonDiceName = ["", "風", "雨", "雲", "影", "月", "歌"]);
    }, $Utakaze_initialize$1.$$arity = 0);
    
    Opal.def(self, '$isGetOriginalMessage', $Utakaze_isGetOriginalMessage$2 = function $$isGetOriginalMessage() {
      var self = this;

      return true
    }, $Utakaze_isGetOriginalMessage$2.$$arity = 0);
    
    Opal.def(self, '$rollDiceCommand', $Utakaze_rollDiceCommand$3 = function $$rollDiceCommand(command) {
      var $a, self = this, result = nil, $case = nil, base = nil, crit = nil, diff = nil;

      
      self.$debug("rollDiceCommand command", command);
      result = "";
      $case = command;
      if (/(\d+)?UK(\@?(\d))?(>=(\d+))?/i['$===']($case)) {
      base = ($truthy($a = $$($nesting, 'Regexp').$last_match(1)) ? $a : 2).$to_i();
      crit = $$($nesting, 'Regexp').$last_match(3).$to_i();
      diff = $$($nesting, 'Regexp').$last_match(5).$to_i();
      result = self.$checkRoll(base, crit, diff);};
      if ($truthy(result['$empty?']())) {
        return nil};
      return "" + (command) + " ＞ " + (result);
    }, $Utakaze_rollDiceCommand$3.$$arity = 1);
    
    Opal.def(self, '$checkRoll', $Utakaze_checkRoll$4 = function $$checkRoll(base, crit, diff) {
      var $a, $b, $$5, self = this, result = nil, _ = nil, diceText = nil, diceList = nil;

      
      
      if (diff == null) {
        diff = 0;
      };
      result = "";
      base = self.$getValue(base);
      crit = self.$getValue(crit);
      if ($truthy($rb_lt(base, 1))) {
        return result};
      if ($truthy($rb_gt(crit, 6))) {
        crit = 6};
      result = $rb_plus(result, "" + "(" + (base) + "d6)");
      $b = self.$roll(base, 6), $a = Opal.to_ary($b), (_ = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
      diceList = $send(diceText.$split(/,/), 'collect', [], ($$5 = function(i){var self = $$5.$$s || this;

      
        
        if (i == null) {
          i = nil;
        };
        return i.$to_i();}, $$5.$$s = self, $$5.$$arity = 1, $$5)).$sort();
      result = $rb_plus(result, "" + " ＞ [" + (diceList.$join(",")) + "] ＞ ");
      result = $rb_plus(result, self.$getRollResultString(diceList, crit, diff));
      return result;
    }, $Utakaze_checkRoll$4.$$arity = -3);
    
    Opal.def(self, '$getRollResultString', $Utakaze_getRollResultString$6 = function $$getRollResultString(diceList, crit, diff) {
      var $a, $b, self = this, success = nil, maxnum = nil, setCount = nil, result = nil, diffSuccess = nil;

      
      $b = self.$getSuccessInfo(diceList, crit, diff), $a = Opal.to_ary($b), (success = ($a[0] == null ? nil : $a[0])), (maxnum = ($a[1] == null ? nil : $a[1])), (setCount = ($a[2] == null ? nil : $a[2])), $b;
      result = "";
      if ($truthy(self.$isDragonDice(crit))) {
        result = $rb_plus(result, "" + "龍のダイス「" + (self.arrayDragonDiceName['$[]'](crit)) + "」(" + (crit) + ")を使用 ＞ ")};
      if ($truthy(success)) {
        
        result = $rb_plus(result, "" + "成功レベル:" + (maxnum) + " (" + (setCount) + "セット)");
        if ($truthy(diff['$!='](0))) {
          
          diffSuccess = $rb_ge(maxnum, diff);
          if ($truthy(diffSuccess)) {
            result = $rb_plus(result, " ＞ 成功")
          } else {
            result = $rb_plus(result, " ＞ 失敗")
          };};
      } else {
        result = $rb_plus(result, "失敗")
      };
      return result;
    }, $Utakaze_getRollResultString$6.$$arity = 3);
    
    Opal.def(self, '$getSuccessInfo', $Utakaze_getSuccessInfo$7 = function $$getSuccessInfo(diceList, crit, _diff) {
      var $$8, self = this, diceCountHash = nil, maxnum = nil, successDiceList = nil, countThreshold = nil;

      
      self.$debug("checkSuccess diceList, crit", diceList, crit);
      diceCountHash = self.$getDiceCountHash(diceList, crit);
      self.$debug("diceCountHash", diceCountHash);
      maxnum = 0;
      successDiceList = [];
      countThreshold = (function() {if ($truthy(self.$isDragonDice(crit))) {
        return 1
      } else {
        return 2
      }; return nil; })();
      $send(diceCountHash, 'each', [], ($$8 = function(dice, count){var self = $$8.$$s || this;

      
        
        if (dice == null) {
          dice = nil;
        };
        
        if (count == null) {
          count = nil;
        };
        if ($truthy($rb_gt(count, maxnum))) {
          maxnum = count};
        if ($truthy($rb_ge(count, countThreshold))) {
          return successDiceList['$<<'](dice)
        } else {
          return nil
        };}, $$8.$$s = self, $$8.$$arity = 2, $$8));
      self.$debug("successDiceList", successDiceList);
      if ($truthy($rb_le(successDiceList.$size(), 0))) {
        return [false, 0, 0]};
      if ($truthy(self.$isDragonDice(crit))) {
        maxnum = $rb_times(maxnum, 2)};
      return [true, maxnum, successDiceList.$size()];
    }, $Utakaze_getSuccessInfo$7.$$arity = 3);
    
    Opal.def(self, '$getDiceCountHash', $Utakaze_getDiceCountHash$9 = function $$getDiceCountHash(diceList, crit) {
      var $$10, self = this, diceCountHash = nil;

      
      diceCountHash = $send(diceList, 'inject', [$$($nesting, 'Hash').$new(0)], ($$10 = function(hash, dice){var self = $$10.$$s || this, $a, $writer = nil;

      
        
        if (hash == null) {
          hash = nil;
        };
        
        if (dice == null) {
          dice = nil;
        };
        if ($truthy(($truthy($a = self.$isNomalDice(crit)) ? $a : dice['$=='](crit)))) {
          
          $writer = [dice, $rb_plus(hash['$[]'](dice), 1)];
          $send(hash, '[]=', Opal.to_a($writer));
          $writer[$rb_minus($writer["length"], 1)];};
        return hash;}, $$10.$$s = self, $$10.$$arity = 2, $$10));
      return diceCountHash;
    }, $Utakaze_getDiceCountHash$9.$$arity = 2);
    
    Opal.def(self, '$isNomalDice', $Utakaze_isNomalDice$11 = function $$isNomalDice(crit) {
      var self = this;

      return self.$isDragonDice(crit)['$!']()
    }, $Utakaze_isNomalDice$11.$$arity = 1);
    
    Opal.def(self, '$isDragonDice', $Utakaze_isDragonDice$12 = function $$isDragonDice(crit) {
      var self = this;

      return crit['$!='](0)
    }, $Utakaze_isDragonDice$12.$$arity = 1);
    return (Opal.def(self, '$getValue', $Utakaze_getValue$13 = function $$getValue(number) {
      var self = this;

      
      if ($truthy($rb_gt(number, 100))) {
        return 0};
      return number;
    }, $Utakaze_getValue$13.$$arity = 1), nil) && 'getValue';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
