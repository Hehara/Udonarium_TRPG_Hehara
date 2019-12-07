/* Generated by Opal 0.11.4 */
Opal.modules["diceBot/SRS"] = function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$checkRoll', '$empty?', '$=~', '$last_match', '$to_i', '$nil?', '$parren_killer', '$roll', '$+', '$<', '$abs', '$>=', '$<=']);
  return (function($base, $super, $parent_nesting) {
    function $SRS(){};
    var self = $SRS = $klass($base, $super, 'SRS', $SRS);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_SRS_initialize_1, TMP_SRS_gameName_2, TMP_SRS_gameType_3, TMP_SRS_getHelpMessage_4, TMP_SRS_rollDiceCommand_5, TMP_SRS_checkRoll_6;

    def.sortType = nil;
    
    self.$setPrefixes(["2D6.*"]);
    
    Opal.defn(self, '$initialize', TMP_SRS_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_SRS_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_SRS_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_SRS_initialize_1, false), $zuper, $iter);
      self.sendMode = 2;
      return (self.sortType = 1);
    }, TMP_SRS_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_SRS_gameName_2 = function $$gameName() {
      var self = this;

      return "Standard RPG System"
    }, TMP_SRS_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_SRS_gameType_3 = function $$gameType() {
      var self = this;

      return "SRS"
    }, TMP_SRS_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_SRS_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・判定\n" + "　・通常判定　　　　　　2D6+m>=t[c,f]\n" + "　　修正値m,目標値t,クリティカル値c,ファンブル値fで判定ロールを行います。\n" + "　　クリティカル値、ファンブル値は省略可能です。([]ごと省略できます)\n" + "　　自動成功、自動失敗、成功、失敗を自動表示します。\n" + "\n" + "　　例) 2d6+2>=10       修整+2、目標値10で判定\n" + "　　例) 2d6+2>=10[11]   ↑をクリティカル値11で判定\n" + "　　例) 2d6+2>=10[12,4] ↑をクリティカル値12、ファンブル値4で判定\n"
    }, TMP_SRS_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$rollDiceCommand', TMP_SRS_rollDiceCommand_5 = function $$rollDiceCommand(command) {
      var self = this, result = nil;

      
      result = self.$checkRoll(command);
      if ($truthy(result['$empty?']())) {
        return nil
        } else {
        return result
      };
    }, TMP_SRS_rollDiceCommand_5.$$arity = 1);
    return (Opal.defn(self, '$checkRoll', TMP_SRS_checkRoll_6 = function $$checkRoll(string) {
      var $a, $b, $c, self = this, output = nil, crit = nil, fumble = nil, modText = nil, target = nil, mod = nil, total = nil, dice_str = nil, total_n = nil;

      
      output = "";
      crit = 12;
      fumble = 2;
      if ($truthy(/^2D6([\+\-\d]*)>=(\d+)(\[(\d+)?(,(\d+))?\])?$/i['$=~'](string))) {
        } else {
        return output
      };
      modText = Opal.const_get_relative($nesting, 'Regexp').$last_match(1);
      target = Opal.const_get_relative($nesting, 'Regexp').$last_match(2).$to_i();
      if ($truthy(Opal.const_get_relative($nesting, 'Regexp').$last_match(4))) {
        crit = Opal.const_get_relative($nesting, 'Regexp').$last_match(4).$to_i()};
      if ($truthy(Opal.const_get_relative($nesting, 'Regexp').$last_match(6))) {
        fumble = Opal.const_get_relative($nesting, 'Regexp').$last_match(6).$to_i()};
      mod = 0;
      if ($truthy(modText['$nil?']())) {
        } else {
        mod = self.$parren_killer("" + "(0" + (modText) + ")")
      };
      $b = self.$roll(2, 6, ($truthy($c = self.sortType) ? 1 : $c)), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), (dice_str = ($a[1] == null ? nil : $a[1])), $b;
      total_n = $rb_plus(total, mod.$to_i());
      if ($truthy($rb_lt(mod.$to_i(), 0))) {
        output = "" + (total) + "[" + (dice_str) + "]－" + (mod.$to_i().$abs()) + " ＞ " + (total_n)
        } else {
        output = "" + (total) + "[" + (dice_str) + "]＋" + (mod) + " ＞ " + (total_n)
      };
      if ($truthy($rb_ge(total, crit))) {
        output = $rb_plus(output, " ＞ 自動成功")
      } else if ($truthy($rb_le(total, fumble))) {
        output = $rb_plus(output, " ＞ 自動失敗")
      } else if ($truthy($rb_ge(total_n, target))) {
        output = $rb_plus(output, " ＞ 成功")
        } else {
        output = $rb_plus(output, " ＞ 失敗")
      };
      output = "" + "(" + (string) + ") ＞ " + (output);
      return output;
    }, TMP_SRS_checkRoll_6.$$arity = 1), nil) && 'checkRoll';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
};

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send;

  Opal.add_stubs(['$require', '$setPrefixes', '$gsub', '$last_match']);
  
  self.$require("diceBot/SRS");
  return (function($base, $super, $parent_nesting) {
    function $Alshard(){};
    var self = $Alshard = $klass($base, $super, 'Alshard', $Alshard);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Alshard_initialize_1, TMP_Alshard_gameName_2, TMP_Alshard_gameType_3, TMP_Alshard_getHelpMessage_4, TMP_Alshard_changeText_6;

    
    self.$setPrefixes(["2D6.*", "AL.*"]);
    
    Opal.defn(self, '$initialize', TMP_Alshard_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_Alshard_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_Alshard_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_Alshard_initialize_1, false), $zuper, $iter);
      return (self.d66Type = 1);
    }, TMP_Alshard_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_Alshard_gameName_2 = function $$gameName() {
      var self = this;

      return "アルシャード"
    }, TMP_Alshard_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_Alshard_gameType_3 = function $$gameType() {
      var self = this;

      return "Alshard"
    }, TMP_Alshard_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_Alshard_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・判定\n" + "　・通常判定　　　　　　2D6+m>=t[c,f]\n" + "　　修正値m,目標値t,クリティカル値c,ファンブル値fで判定ロールを行います。\n" + "　　クリティカル値、ファンブル値は省略可能です。([]ごと省略できます)\n" + "　　自動成功、自動失敗、成功、失敗を自動表示します。\n" + "\n" + "　　例) 2d6+2>=10       修整+2、目標値10で判定\n" + "　　例) 2d6+2>=10[11]   ↑をクリティカル値11で判定\n" + "　　例) 2d6+2>=10[12,4] ↑をクリティカル値12、ファンブル値4で判定\n" + "　　例) AL+2>=10        2d6+2>=10と同じ（ALが2D6のショートカットコマンド）\n" + "\n" + "・D66ダイス(入れ替え無し)あり\n"
    }, TMP_Alshard_getHelpMessage_4.$$arity = 0);
    return (Opal.defn(self, '$changeText', TMP_Alshard_changeText_6 = function $$changeText(string) {
      var TMP_5, self = this;

      
      string = $send(string, 'gsub', [/^(S)?AL/i], (TMP_5 = function(){var self = TMP_5.$$s || this;

      return "" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "2D6"}, TMP_5.$$s = self, TMP_5.$$arity = 0, TMP_5));
      return string;
    }, TMP_Alshard_changeText_6.$$arity = 1), nil) && 'changeText';
  })($nesting[0], Opal.const_get_relative($nesting, 'SRS'), $nesting);
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
