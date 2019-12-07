/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy;

  Opal.add_stubs(['$==', '$<=', '$>=', '$+', '$/', '$<']);
  return (function($base, $super, $parent_nesting) {
    function $Elric(){};
    var self = $Elric = $klass($base, $super, 'Elric', $Elric);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Elric_gameName_1, TMP_Elric_gameType_2, TMP_Elric_getHelpMessage_3, TMP_Elric_check_1D100_4;

    
    
    Opal.defn(self, '$gameName', TMP_Elric_gameName_1 = function $$gameName() {
      var self = this;

      return "エルリック！"
    }, TMP_Elric_gameName_1.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_Elric_gameType_2 = function $$gameType() {
      var self = this;

      return "Elric!"
    }, TMP_Elric_gameType_2.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_Elric_getHelpMessage_3 = function $$getHelpMessage() {
      var self = this;

      return "貫通、クリティカル、ファンブルの自動判定を行います。\n"
    }, TMP_Elric_getHelpMessage_3.$$arity = 0);
    return (Opal.defn(self, '$check_1D100', TMP_Elric_check_1D100_4 = function $$check_1D100(total_n, _dice_n, signOfInequality, diff, _dice_cnt, _dice_max, _n1, _n_max) {
      var $a, self = this;

      
      if (signOfInequality['$==']("<=")) {
        } else {
        return ""
      };
      if ($truthy($rb_le(total_n, 1))) {
        return " ＞ 貫通"};
      if ($truthy($rb_ge(total_n, 100))) {
        return " ＞ 致命的失敗"};
      if ($truthy($rb_le(total_n, $rb_plus($rb_divide(diff, 5), 0.9)))) {
        return " ＞ 決定的成功"};
      if ($truthy($rb_le(total_n, diff))) {
        return " ＞ 成功"};
      if ($truthy(($truthy($a = $rb_ge(total_n, 99)) ? $rb_lt(diff, 100) : $a))) {
        return " ＞ 致命的失敗"};
      return " ＞ 失敗";
    }, TMP_Elric_check_1D100_4.$$arity = 8), nil) && 'check_1D100';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
