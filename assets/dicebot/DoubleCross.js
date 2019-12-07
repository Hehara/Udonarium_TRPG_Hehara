/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
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
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy, $gvars = Opal.gvars;

  Opal.add_stubs(['$setPrefixes', '$=~', '$debug', '$gsub', '$last_match', '$check_dice', '$nil?', '$==', '$>=', '$-', '$rerollNumber', '$to_i', '$<=', '$!', '$marshalSignOfInequality', '$!=', '$defaultSuccessTarget', '$split', '$each', '$push', '$shift', '$+', '$join', '$parren_killer', '$collect', '$roll', '$&', '$sortType', '$[]', '$>', '$loop', '$isReRollAgain', '$bcdice', '$<', '$length', '$check_suc', '$get_emotion_table', '$dx_feel_positive_table', '$dx_feel_negative_table', '$dx_feel_table', '$get_table_by_number']);
  return (function($base, $super, $parent_nesting) {
    function $DoubleCross(){};
    var self = $DoubleCross = $klass($base, $super, 'DoubleCross', $DoubleCross);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_DoubleCross_initialize_1, TMP_DoubleCross_gameName_2, TMP_DoubleCross_gameType_3, TMP_DoubleCross_getHelpMessage_4, TMP_DoubleCross_changeText_10, TMP_DoubleCross_dice_command_xRn_11, TMP_DoubleCross_check_nD10_12, TMP_DoubleCross_getJackUpValueOnAddRoll_13, TMP_DoubleCross_check_dice_18, TMP_DoubleCross_rollDiceCommand_19, TMP_DoubleCross_get_emotion_table_20, TMP_DoubleCross_dx_feel_positive_table_21, TMP_DoubleCross_dx_feel_negative_table_22, TMP_DoubleCross_dx_feel_table_23;

    
    self.$setPrefixes(["(\\d+dx|ET)"]);
    
    Opal.defn(self, '$initialize', TMP_DoubleCross_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_DoubleCross_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_DoubleCross_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_DoubleCross_initialize_1, false), $zuper, $iter);
      self.sendMode = 2;
      self.sortType = 2;
      self.isPrintMaxDice = true;
      self.upplerRollThreshold = 10;
      self.unlimitedRollDiceType = 10;
      return (self.rerollNumber = 10);
    }, TMP_DoubleCross_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_DoubleCross_gameName_2 = function $$gameName() {
      var self = this;

      return "ダブルクロス2nd,3rd"
    }, TMP_DoubleCross_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_DoubleCross_gameType_3 = function $$gameType() {
      var self = this;

      return "DoubleCross"
    }, TMP_DoubleCross_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_DoubleCross_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・判定コマンド　(xDX+y@c or xDXc+y)\n" + "　\"(個数)DX(修正)@(クリティカル値)\"もしくは\"(個数)DX(クリティカル値)(修正)\"で指定します。\n" + "　加算減算のみ修正値も付けられます。\n" + "　内部で読み替えています。\n" + "　例）10dx　　　10dx+5@8(OD tool式)　　　5DX7+7-3(疾風怒濤式)\n" + "\n" + "・各種表\n" + "　・感情表(ET)\n" + "　　ポジティブとネガティブの両方を振って、表になっている側に○を付けて表示します。もちろん任意で選ぶ部分は変更して構いません。\n" + "\n" + "・D66ダイスあり\n"
    }, TMP_DoubleCross_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$changeText', TMP_DoubleCross_changeText_10 = function $$changeText(string) {
      var TMP_5, TMP_6, TMP_7, TMP_8, TMP_9, self = this, crit = nil;

      
      if ($truthy(/(\d+)DX/i['$=~'](string))) {
        } else {
        return string
      };
      self.$debug("DoubleCross parren_killer_add string", string);
      string = $send(string, 'gsub', [/(\d+)DX(\d*)([^\d\s][\+\-\d]+)/i], (TMP_5 = function(){var self = TMP_5.$$s || this;

      return "" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "R10" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(3)) + "[" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(2)) + "]"}, TMP_5.$$s = self, TMP_5.$$arity = 0, TMP_5));
      string = $send(string, 'gsub', [/(\d+)DX(\d+)/i], (TMP_6 = function(){var self = TMP_6.$$s || this;

      return "" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "R10[" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(2)) + "]"}, TMP_6.$$s = self, TMP_6.$$arity = 0, TMP_6));
      string = $send(string, 'gsub', [/(\d+)DX([^\d\s][\+\-\d]+)/i], (TMP_7 = function(){var self = TMP_7.$$s || this;

      return "" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "R10" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(2))}, TMP_7.$$s = self, TMP_7.$$arity = 0, TMP_7));
      string = $send(string, 'gsub', [/(\d+)DX/i], (TMP_8 = function(){var self = TMP_8.$$s || this;

      return "" + (Opal.const_get_relative($nesting, 'Regexp').$last_match(1)) + "R10"}, TMP_8.$$s = self, TMP_8.$$arity = 0, TMP_8));
      if ($truthy(/\@(\d+)/['$=~'](string))) {
        
        crit = Opal.const_get_relative($nesting, 'Regexp').$last_match(1);
        string = $send(string, 'gsub', [/\[\]/], (TMP_9 = function(){var self = TMP_9.$$s || this;

        return "" + "[" + (crit) + "]"}, TMP_9.$$s = self, TMP_9.$$arity = 0, TMP_9));
        string = string.$gsub(/\@(\d+)/, "");};
      string = string.$gsub(/\[\]/, "");
      self.$debug("DoubleCross parren_killer_add changed string", string);
      return string;
    }, TMP_DoubleCross_changeText_10.$$arity = 1);
    
    Opal.defn(self, '$dice_command_xRn', TMP_DoubleCross_dice_command_xRn_11 = function $$dice_command_xRn(string, nick_e) {
      var self = this, output_msg = nil;

      
      output_msg = self.$check_dice(string);
      if ($truthy(output_msg['$nil?']())) {
        return nil};
      return "" + (nick_e) + ": " + (output_msg);
    }, TMP_DoubleCross_dice_command_xRn_11.$$arity = 2);
    
    Opal.defn(self, '$check_nD10', TMP_DoubleCross_check_nD10_12 = function $$check_nD10(total_n, _dice_n, signOfInequality, diff, dice_cnt, _dice_max, n1, _n_max) {
      var self = this;

      
      if (signOfInequality['$=='](">=")) {
        } else {
        return ""
      };
      if ($truthy($rb_ge(n1, dice_cnt))) {
        return " ＞ ファンブル"
      } else if ($truthy($rb_ge(total_n, diff))) {
        return " ＞ 成功"
        } else {
        return " ＞ 失敗"
      };
    }, TMP_DoubleCross_check_nD10_12.$$arity = 8);
    
    Opal.defn(self, '$getJackUpValueOnAddRoll', TMP_DoubleCross_getJackUpValueOnAddRoll_13 = function $$getJackUpValueOnAddRoll(dice_n, _round) {
      var self = this;

      return $rb_minus(10, dice_n)
    }, TMP_DoubleCross_getJackUpValueOnAddRoll_13.$$arity = 2);
    
    Opal.defn(self, '$check_dice', TMP_DoubleCross_check_dice_18 = function $$check_dice(string) {
      var $a, TMP_14, TMP_15, TMP_17, self = this, dice_cnt = nil, dice_max = nil, round = nil, total_n = nil, signOfInequality = nil, diff = nil, output = nil, output2 = nil, next_roll = nil, critical = nil, dice_cmd = nil, dice_bns = nil, dice_a = nil, bonus_str = nil, bonus_ttl = nil, numberSpot1 = nil, dice_cnt_total = nil;
      if ($gvars.SEND_STR_MAX == null) $gvars.SEND_STR_MAX = nil;

      
      self.$debug("dxdice begin string", string);
      dice_cnt = 0;
      dice_max = 0;
      round = 0;
      total_n = 0;
      signOfInequality = "";
      diff = 0;
      output = "";
      output2 = "";
      next_roll = 0;
      string = string.$gsub(/-[\d]+[rR][\d]+/, "");
      if ($truthy(/(^|\s)[sS]?([\d]+[rR][\d\+\-rR]+)(\[(\d+)\])?(([<>=]+)(\d+))?($|\s)/['$=~'](string))) {
        } else {
        
        self.$debug("invaid string", string);
        return nil;
      };
      string = Opal.const_get_relative($nesting, 'Regexp').$last_match(2);
      critical = Opal.const_get_relative($nesting, 'Regexp').$last_match(4);
      critical = ($truthy($a = critical) ? $a : self.$rerollNumber());
      critical = critical.$to_i();
      self.$debug("critical", critical);
      if ($truthy($rb_le(critical, 1))) {
        return "クリティカル値が低すぎます。2以上を指定してください。"};
      if ($truthy(Opal.const_get_relative($nesting, 'Regexp').$last_match(5)['$nil?']()['$!']())) {
        
        diff = Opal.const_get_relative($nesting, 'Regexp').$last_match(7).$to_i();
        signOfInequality = self.$marshalSignOfInequality(Opal.const_get_relative($nesting, 'Regexp').$last_match(6));
      } else if ($truthy(self.$defaultSuccessTarget()['$!='](""))) {
        if ($truthy(/([<>=]+)(\d+)/['$=~'](self.$defaultSuccessTarget()))) {
          
          diff = Opal.const_get_relative($nesting, 'Regexp').$last_match(2).$to_i();
          signOfInequality = self.$marshalSignOfInequality(Opal.const_get_relative($nesting, 'Regexp').$last_match(1));}};
      dice_cmd = [];
      dice_bns = [];
      dice_a = string.$split(/\+/);
      $send(dice_a, 'each', [], (TMP_14 = function(dice_o){var self = TMP_14.$$s || this, dice_wk = nil;
if (dice_o == null) dice_o = nil;
      if ($truthy(/[Rr]/['$=~'](dice_o))) {
          if ($truthy(/-/['$=~'](dice_o))) {
            
            dice_wk = dice_o.$split(/-/);
            dice_cmd.$push(dice_wk.$shift());
            return dice_bns.$push($rb_plus("0-", dice_wk.$join("-")));
            } else {
            return dice_cmd.$push(dice_o)
          }
          } else {
          return dice_bns.$push(dice_o)
        }}, TMP_14.$$s = self, TMP_14.$$arity = 1, TMP_14));
      bonus_str = dice_bns.$join("+");
      bonus_ttl = 0;
      if ($truthy(bonus_str['$!='](""))) {
        bonus_ttl = self.$parren_killer("" + "(" + (bonus_str) + ")").$to_i()};
      numberSpot1 = 0;
      dice_cnt_total = 0;
      $send(dice_cmd, 'each', [], (TMP_15 = function(dice_o){var self = TMP_15.$$s || this, $b, $c, TMP_16, subtotal = nil, dice_dat = nil;
if (dice_o == null) dice_o = nil;
      
        subtotal = 0;
        $c = $send(dice_o.$split(/[rR]/), 'collect', [], (TMP_16 = function(s){var self = TMP_16.$$s || this;
if (s == null) s = nil;
        return s.$to_i()}, TMP_16.$$s = self, TMP_16.$$arity = 1, TMP_16)), $b = Opal.to_ary($c), (dice_cnt = ($b[0] == null ? nil : $b[0])), (dice_max = ($b[1] == null ? nil : $b[1])), $c;
        dice_dat = self.$roll(dice_cnt, dice_max, self.$sortType()['$&'](2), 0, "", 0, critical);
        if ($truthy(output['$!='](""))) {
          output = $rb_plus(output, ",")};
        next_roll = $rb_plus(next_roll, dice_dat['$[]'](6));
        numberSpot1 = $rb_plus(numberSpot1, dice_dat['$[]'](2));
        dice_cnt_total = $rb_plus(dice_cnt_total, dice_cnt);
        if ($truthy($rb_gt(dice_dat['$[]'](6), 0))) {
          if (dice_max['$=='](10)) {
            subtotal = 10
            } else {
            subtotal = dice_dat['$[]'](4)
          }
          } else {
          subtotal = dice_dat['$[]'](4)
        };
        output = $rb_plus(output, "" + (subtotal) + "[" + (dice_dat['$[]'](1)) + "]");
        return (total_n = $rb_plus(total_n, subtotal));}, TMP_15.$$s = self, TMP_15.$$arity = 1, TMP_15));
      round = 0;
      if ($truthy($rb_gt(next_roll, 0))) {
        
        dice_cnt = next_roll;
        (function(){var $brk = Opal.new_brk(); try {return $send(self, 'loop', [], (TMP_17 = function(){var self = TMP_17.$$s || this, subtotal = nil, dice_dat = nil;

        
          subtotal = 0;
          output2 = $rb_plus(output2, "" + (output) + "+");
          output = "";
          dice_dat = self.$roll(dice_cnt, dice_max, self.$sortType()['$&'](2), 0, "", 0, critical);
          round = $rb_plus(round, 1);
          dice_cnt_total = $rb_plus(dice_cnt_total, dice_cnt);
          dice_cnt = dice_dat['$[]'](6);
          if ($truthy($rb_gt(dice_dat['$[]'](6), 0))) {
            if (dice_max['$=='](10)) {
              subtotal = 10
              } else {
              subtotal = dice_dat['$[]'](4)
            }
            } else {
            subtotal = dice_dat['$[]'](4)
          };
          output = $rb_plus(output, "" + (subtotal) + "[" + (dice_dat['$[]'](1)) + "]");
          total_n = $rb_plus(total_n, subtotal);
          if ($truthy(self.$bcdice().$isReRollAgain(dice_cnt, round))) {
            return nil
            } else {
            
            Opal.brk(nil, $brk)
          };}, TMP_17.$$s = self, TMP_17.$$brk = $brk, TMP_17.$$arity = 0, TMP_17))
        } catch (err) { if (err === $brk) { return err.$v } else { throw err } }})();};
      total_n = $rb_plus(total_n, bonus_ttl);
      if ($truthy($rb_gt(bonus_ttl, 0))) {
        output = "" + (output2) + (output) + "+" + (bonus_ttl) + " ＞ " + (total_n)
      } else if ($truthy($rb_lt(bonus_ttl, 0))) {
        output = "" + (output2) + (output) + (bonus_ttl) + " ＞ " + (total_n)
        } else {
        output = "" + (output2) + (output) + " ＞ " + (total_n)
      };
      string = $rb_plus(string, "" + "[" + (critical) + "]");
      if ($truthy(signOfInequality['$!='](""))) {
        string = $rb_plus(string, "" + (signOfInequality) + (diff))};
      output = "" + "(" + (string) + ") ＞ " + (output);
      if ($truthy($rb_gt(output.$length(), $gvars.SEND_STR_MAX))) {
        output = "" + "(" + (string) + ") ＞ ... ＞ 回転数" + (round) + " ＞ " + (total_n)};
      if ($truthy(signOfInequality['$!='](""))) {
        output = $rb_plus(output, self.$check_suc(total_n, 0, signOfInequality, diff, dice_cnt_total, dice_max, numberSpot1, 0))
      } else if ($truthy($rb_le(round, 0))) {
        if (dice_max['$=='](10)) {
          if ($truthy($rb_ge(numberSpot1, dice_cnt_total))) {
            output = $rb_plus(output, " ＞ ファンブル")}}};
      return output;
    }, TMP_DoubleCross_check_dice_18.$$arity = 1);
    
    Opal.defn(self, '$rollDiceCommand', TMP_DoubleCross_rollDiceCommand_19 = function $$rollDiceCommand(_command) {
      var self = this;

      return self.$get_emotion_table()
    }, TMP_DoubleCross_rollDiceCommand_19.$$arity = 1);
    
    Opal.defn(self, '$get_emotion_table', TMP_DoubleCross_get_emotion_table_20 = function $$get_emotion_table() {
      var $a, $b, self = this, output = nil, pos_dice = nil, pos_table = nil, neg_dice = nil, neg_table = nil, dice_now = nil;

      
      output = nil;
      $b = self.$dx_feel_positive_table(), $a = Opal.to_ary($b), (pos_dice = ($a[0] == null ? nil : $a[0])), (pos_table = ($a[1] == null ? nil : $a[1])), $b;
      $b = self.$dx_feel_negative_table(), $a = Opal.to_ary($b), (neg_dice = ($a[0] == null ? nil : $a[0])), (neg_table = ($a[1] == null ? nil : $a[1])), $b;
      $b = self.$roll(1, 2), $a = Opal.to_ary($b), (dice_now = ($a[0] == null ? nil : $a[0])), $b;
      if ($truthy(($truthy($a = pos_table['$!=']("1")) ? neg_table['$!=']("1") : $a))) {
        
        if ($truthy($rb_lt(dice_now, 2))) {
          pos_table = $rb_plus("○", pos_table)
          } else {
          neg_table = $rb_plus("○", neg_table)
        };
        output = "" + "感情表(" + (pos_dice) + "-" + (neg_dice) + ") ＞ " + (pos_table) + " - " + (neg_table);};
      return output;
    }, TMP_DoubleCross_get_emotion_table_20.$$arity = 0);
    
    Opal.defn(self, '$dx_feel_positive_table', TMP_DoubleCross_dx_feel_positive_table_21 = function $$dx_feel_positive_table() {
      var self = this, table = nil;

      
      table = [[0, "傾倒(けいとう)"], [5, "好奇心(こうきしん)"], [10, "憧憬(どうけい)"], [15, "尊敬(そんけい)"], [20, "連帯感(れんたいかん)"], [25, "慈愛(じあい)"], [30, "感服(かんぷく)"], [35, "純愛(じゅんあい)"], [40, "友情(ゆうじょう)"], [45, "慕情(ぼじょう)"], [50, "同情(どうじょう)"], [55, "遺志(いし)"], [60, "庇護(ひご)"], [65, "幸福感(こうふくかん)"], [70, "信頼(しんらい)"], [75, "執着(しゅうちゃく)"], [80, "親近感(しんきんかん)"], [85, "誠意(せいい)"], [90, "好意(こうい)"], [95, "有為(ゆうい)"], [100, "尽力(じんりょく)"], [101, "懐旧(かいきゅう)"], [102, "任意(にんい)"]];
      return self.$dx_feel_table(table);
    }, TMP_DoubleCross_dx_feel_positive_table_21.$$arity = 0);
    
    Opal.defn(self, '$dx_feel_negative_table', TMP_DoubleCross_dx_feel_negative_table_22 = function $$dx_feel_negative_table() {
      var self = this, table = nil;

      
      table = [[0, "侮蔑(ぶべつ)"], [5, "食傷(しょくしょう)"], [10, "脅威(きょうい)"], [15, "嫉妬(しっと)"], [20, "悔悟(かいご)"], [25, "恐怖(きょうふ)"], [30, "不安(ふあん)"], [35, "劣等感(れっとうかん)"], [40, "疎外感(そがいかん)"], [45, "恥辱(ちじょく)"], [50, "憐憫(れんびん)"], [55, "偏愛(へんあい)"], [60, "憎悪(ぞうお)"], [65, "隔意(かくい)"], [70, "嫌悪(けんお)"], [75, "猜疑心(さいぎしん)"], [80, "厭気(いやけ)"], [85, "不信感(ふしんかん)"], [90, "不快感(ふかいかん)"], [95, "憤懣(ふんまん)"], [100, "敵愾心(てきがいしん)"], [101, "無関心(むかんしん)"], [102, "任意(にんい)"]];
      return self.$dx_feel_table(table);
    }, TMP_DoubleCross_dx_feel_negative_table_22.$$arity = 0);
    return (Opal.defn(self, '$dx_feel_table', TMP_DoubleCross_dx_feel_table_23 = function $$dx_feel_table(table) {
      var $a, $b, self = this, dice_now = nil, output = nil;

      
      $b = self.$roll(1, 100), $a = Opal.to_ary($b), (dice_now = ($a[0] == null ? nil : $a[0])), $b;
      output = self.$get_table_by_number(dice_now, table);
      return [dice_now, output];
    }, TMP_DoubleCross_dx_feel_table_23.$$arity = 1), nil) && 'dx_feel_table';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
