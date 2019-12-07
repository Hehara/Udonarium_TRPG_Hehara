/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$=~', '$gsub', '$last_match', '$check_roll', '$==', '$>=', '$match', '$[]', '$to_i', '$parren_killer', '$marshalSignOfInequality', '$get_dice', '$!=', '$+', '$check_suc', '$abs', '$roll', '$shift', '$collect', '$split', '$times', '$<', '$-', '$<=', '$===', '$get_horidasibukuro_table', '$debug', '$/']);
  return (function($base, $super, $parent_nesting) {
    function $DarkBlaze(){};
    var self = $DarkBlaze = $klass($base, $super, 'DarkBlaze', $DarkBlaze);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_DarkBlaze_initialize_1, TMP_DarkBlaze_gameName_2, TMP_DarkBlaze_gameType_3, TMP_DarkBlaze_getHelpMessage_4, TMP_DarkBlaze_changeText_10, TMP_DarkBlaze_dice_command_xRn_11, TMP_DarkBlaze_check_nD6_12, TMP_DarkBlaze_check_roll_13, TMP_DarkBlaze_get_dice_16, TMP_DarkBlaze_rollDiceCommand_17, TMP_DarkBlaze_get_horidasibukuro_table_18;

    
    self.$setPrefixes(["DB.*", "BT.*"]);
    
    Opal.defn(self, '$initialize', TMP_DarkBlaze_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_DarkBlaze_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_DarkBlaze_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_DarkBlaze_initialize_1, false), $zuper, $iter);
      return (self.sendMode = 2);
    }, TMP_DarkBlaze_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_DarkBlaze_gameName_2 = function $$gameName() {
      var self = this;

      return "ダークブレイズ"
    }, TMP_DarkBlaze_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_DarkBlaze_gameType_3 = function $$gameType() {
      var self = this;

      return "DarkBlaze"
    }, TMP_DarkBlaze_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_DarkBlaze_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・行為判定　(DBxy#n)\n" + "　行為判定専用のコマンドです。\n" + "　\"DB(能力)(技能)#(修正)\"でロールします。Rコマンド(3R6+n[x,y]>=m mは難易度)に読替をします。\n" + "　クリティカルとファンブルも自動で処理されます。\n" + "　DB@x@y#m と DBx,y#m にも対応しました。\n" + "　例）DB33　　　DB32#-1　　　DB@3@1#1　　　DB3,2　　　DB23#1>=4　　　3R6+1[3,3]>=4\n" + "\n" + "・掘り出し袋表　(BTx)\n" + "　\"BT(ダイス数)\"で掘り出し袋表を自動で振り、結果を表示します。\n" + "　例）BT1　　　BT2　　　BT[1...3]\n"
    }, TMP_DarkBlaze_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$changeText', TMP_DarkBlaze_changeText_10 = function $$changeText(string) {
      var TMP_5, TMP_6, TMP_7, TMP_8, TMP_9, self = this;

      
      if ($truthy(string['$=~'](/DB/i))) {
        } else {
        return string
      };
      string = $send(string, 'gsub', [/DB(\d),(\d)/], (TMP_5 = function(){var self = TMP_5.$$s || this;

      return "" + "DB" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + (Opal.const_get_relative($nesting, 'Regexp').$last_match(2))}, TMP_5.$$s = self, TMP_5.$$arity = 0, TMP_5));
      string = $send(string, 'gsub', [/DB\@(\d)\@(\d)/], (TMP_6 = function(){var self = TMP_6.$$s || this;

      return "" + "DB" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + (Opal.const_get_relative($nesting, 'Regexp').$last_match(2))}, TMP_6.$$s = self, TMP_6.$$arity = 0, TMP_6));
      string = $send(string, 'gsub', [/DB(\d)(\d)(#([\d][\+\-\d]*))/], (TMP_7 = function(){var self = TMP_7.$$s || this;

      return "" + "3R6+" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(4)) + "[" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "," + (Opal.const_get_relative($nesting, 'Regexp').$last_match(2)) + "]"}, TMP_7.$$s = self, TMP_7.$$arity = 0, TMP_7));
      string = $send(string, 'gsub', [/DB(\d)(\d)(#([\+\-\d]*))/], (TMP_8 = function(){var self = TMP_8.$$s || this;

      return "" + "3R6" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(4)) + "[" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "," + (Opal.const_get_relative($nesting, 'Regexp').$last_match(2)) + "]"}, TMP_8.$$s = self, TMP_8.$$arity = 0, TMP_8));
      string = $send(string, 'gsub', [/DB(\d)(\d)/], (TMP_9 = function(){var self = TMP_9.$$s || this;

      return "" + "3R6[" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "," + (Opal.const_get_relative($nesting, 'Regexp').$last_match(2)) + "]"}, TMP_9.$$s = self, TMP_9.$$arity = 0, TMP_9));
      return string;
    }, TMP_DarkBlaze_changeText_10.$$arity = 1);
    
    Opal.defn(self, '$dice_command_xRn', TMP_DarkBlaze_dice_command_xRn_11 = function $$dice_command_xRn(string, nick_e) {
      var self = this;

      return self.$check_roll(string, nick_e)
    }, TMP_DarkBlaze_dice_command_xRn_11.$$arity = 2);
    
    Opal.defn(self, '$check_nD6', TMP_DarkBlaze_check_nD6_12 = function $$check_nD6(total_n, _dice_n, signOfInequality, diff, _dice_cnt, _dice_max, _n1, _n_max) {
      var self = this;

      
      if (signOfInequality['$=='](">=")) {
        } else {
        return ""
      };
      if (diff['$==']("?")) {
        return ""};
      if ($truthy($rb_ge(total_n, diff))) {
        return " ＞ 成功"};
      return " ＞ 失敗";
    }, TMP_DarkBlaze_check_nD6_12.$$arity = 8);
    
    Opal.defn(self, '$check_roll', TMP_DarkBlaze_check_roll_13 = function $$check_roll(string, nick_e) {
      var $a, $b, self = this, output = nil, m = nil, mod = nil, abl = nil, skl = nil, signOfInequality = nil, diff = nil, total = nil, out_str = nil;

      
      output = "1";
      if ($truthy((m = /(^|\s)S?(3[rR]6([\+\-\d]+)?(\[(\d+),(\d+)\])(([>=]+)(\d+))?)(\s|$)/i.$match(string)))) {
        } else {
        return "1"
      };
      string = m['$[]'](2);
      mod = 0;
      abl = 1;
      skl = 1;
      signOfInequality = "";
      diff = 0;
      if ($truthy(m['$[]'](3))) {
        mod = self.$parren_killer("" + "(0" + (m['$[]'](3)) + ")").$to_i()};
      if ($truthy(m['$[]'](4))) {
        
        abl = m['$[]'](5).$to_i();
        skl = m['$[]'](6).$to_i();};
      if ($truthy(m['$[]'](7))) {
        
        signOfInequality = self.$marshalSignOfInequality(m['$[]'](8));
        diff = m['$[]'](9).$to_i();};
      $b = self.$get_dice(mod, abl, skl), $a = Opal.to_ary($b), (total = ($a[0] == null ? nil : $a[0])), (out_str = ($a[1] == null ? nil : $a[1])), $b;
      output = "" + (nick_e) + ": (" + (string) + ") ＞ " + (out_str);
      if ($truthy(signOfInequality['$!='](""))) {
        output = $rb_plus(output, self.$check_suc(total, 0, signOfInequality, diff, 3, 6, 0, 0))};
      return output;
    }, TMP_DarkBlaze_check_roll_13.$$arity = 2);
    
    Opal.defn(self, '$get_dice', TMP_DarkBlaze_get_dice_16 = function $$get_dice(mod, abl, skl) {
      var TMP_14, TMP_15, self = this, total = nil, crit = nil, fumble = nil, dice_c = nil, dummy = nil, dice_str = nil, dice_arr = nil, resultText = nil, output = nil;

      
      total = 0;
      crit = 0;
      fumble = 0;
      dice_c = $rb_plus(3, mod.$abs());
      dummy = self.$roll(dice_c, 6, 1);
      dummy.$shift();
      dice_str = dummy.$shift();
      dice_arr = $send(dice_str.$split(/,/), 'collect', [], (TMP_14 = function(i){var self = TMP_14.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_14.$$s = self, TMP_14.$$arity = 1, TMP_14));
      $send((3), 'times', [], (TMP_15 = function(i){var self = TMP_15.$$s || this, ch = nil;
if (i == null) i = nil;
      
        ch = dice_arr['$[]'](i);
        if ($truthy($rb_lt(mod, 0))) {
          ch = dice_arr['$[]']($rb_minus($rb_minus(dice_c, i), 1))};
        if ($truthy($rb_le(ch, abl))) {
          total = $rb_plus(total, 1)};
        if ($truthy($rb_le(ch, skl))) {
          total = $rb_plus(total, 1)};
        if ($truthy($rb_le(ch, 2))) {
          crit = $rb_plus(crit, 1)};
        if ($truthy($rb_ge(ch, 5))) {
          return (fumble = $rb_plus(fumble, 1))
          } else {
          return nil
        };}, TMP_15.$$s = self, TMP_15.$$arity = 1, TMP_15));
      resultText = "";
      if ($truthy($rb_ge(crit, 3))) {
        
        resultText = " ＞ クリティカル";
        total = $rb_plus(6, skl);};
      if ($truthy($rb_ge(fumble, 3))) {
        
        resultText = " ＞ ファンブル";
        total = 0;};
      output = "" + (total) + "[" + (dice_str) + "]" + (resultText);
      return [total, output];
    }, TMP_DarkBlaze_get_dice_16.$$arity = 3);
    
    Opal.defn(self, '$rollDiceCommand', TMP_DarkBlaze_rollDiceCommand_17 = function $$rollDiceCommand(command) {
      var $a, self = this, $case = nil, dice = nil;

      
      $case = command;
      if (/BT(\d+)?/i['$===']($case)) {
      dice = Opal.const_get_relative($nesting, 'Regexp').$last_match(1);
      dice = ($truthy($a = dice) ? $a : 1);
      return self.$get_horidasibukuro_table(dice);};
      return nil;
    }, TMP_DarkBlaze_rollDiceCommand_17.$$arity = 1);
    return (Opal.defn(self, '$get_horidasibukuro_table', TMP_DarkBlaze_get_horidasibukuro_table_18 = function $$get_horidasibukuro_table(dice) {
      var $a, $b, self = this, output = nil, material_kind = nil, magic_stone = nil, num1 = nil, dmy = nil, num2 = nil, magic_stone_result = nil, type = nil;

      
      output = "1";
      material_kind = ["蟲甲", "金属", "金貨", "植物", "獣皮", "竜鱗", "レアモノ", "レアモノ"];
      magic_stone = ["火炎石", "雷撃石", "氷結石"];
      $b = self.$roll(2, 6), $a = Opal.to_ary($b), (num1 = ($a[0] == null ? nil : $a[0])), (dmy = ($a[1] == null ? nil : $a[1])), $b;
      $b = self.$roll(dice, 6), $a = Opal.to_ary($b), (num2 = ($a[0] == null ? nil : $a[0])), (dmy = ($a[1] == null ? nil : $a[1])), $b;
      self.$debug("dice", dice);
      self.$debug("num1", num1);
      self.$debug("num2", num2);
      if ($truthy($rb_le(num1, 4))) {
        
        $b = self.$roll(1, 6), $a = Opal.to_ary($b), (num2 = ($a[0] == null ? nil : $a[0])), (dmy = ($a[1] == null ? nil : $a[1])), $b;
        magic_stone_result = magic_stone['$[]']($rb_minus($rb_divide(num2, 2).$to_i(), 1));
        output = "" + "《" + (magic_stone_result) + "》を" + (dice) + "個獲得";
      } else if (num1['$=='](7)) {
        output = "" + "《金貨》を" + (num2) + "枚獲得"
        } else {
        
        type = material_kind['$[]']($rb_minus(num1, 5));
        if ($truthy($rb_le(num2, 3))) {
          output = "" + "《" + (type) + " I》を1個獲得"
        } else if ($truthy($rb_le(num2, 5))) {
          output = "" + "《" + (type) + " I》を2個獲得"
        } else if ($truthy($rb_le(num2, 7))) {
          output = "" + "《" + (type) + " I》を3個獲得"
        } else if ($truthy($rb_le(num2, 9))) {
          output = "" + "《" + (type) + " II》を1個獲得"
        } else if ($truthy($rb_le(num2, 11))) {
          output = "" + "《" + (type) + " I》を2個《" + (type) + " II》を1個獲得"
        } else if ($truthy($rb_le(num2, 13))) {
          output = "" + "《" + (type) + " I》を2個《" + (type) + " II》を2個獲得"
        } else if ($truthy($rb_le(num2, 15))) {
          output = "" + "《" + (type) + " III》を1個獲得"
        } else if ($truthy($rb_le(num2, 17))) {
          output = "" + "《" + (type) + " II》を2個《" + (type) + " III》を1個獲得"
          } else {
          output = "" + "《" + (type) + " II》を2個《" + (type) + " III》を2個獲得"
        };
      };
      if ($truthy(output['$!=']("1"))) {
        output = "" + "掘り出し袋表[" + (num1) + "," + (num2) + "] ＞ " + (output)};
      return output;
    }, TMP_DarkBlaze_get_horidasibukuro_table_18.$$arity = 1), nil) && 'get_horidasibukuro_table';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
