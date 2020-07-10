/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy;

  Opal.add_stubs(['$!=', '$>', '$<=', '$/', '$+']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'InfiniteFantasia');

    var $nesting = [self].concat($parent_nesting), $InfiniteFantasia_check_1D20$1;

    
    Opal.const_set($nesting[0], 'ID', "InfiniteFantasia");
    Opal.const_set($nesting[0], 'NAME', "無限のファンタジア");
    Opal.const_set($nesting[0], 'SORT_KEY', "むけんのふあんたしあ");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "失敗、成功レベルの自動判定を行います。\n");
    return (Opal.def(self, '$check_1D20', $InfiniteFantasia_check_1D20$1 = function $$check_1D20(total, _dice_total, cmp_op, target) {
      var self = this, output = nil;

      
      if ($truthy(cmp_op['$!=']("<="))) {
        return ""
      } else if ($truthy($rb_gt(total, target))) {
        return " ＞ 失敗"};
      output = (function() {if ($truthy($rb_le(total, $rb_divide(target, 32)))) {
        return " ＞ 32レベル成功(32Lv+)"
      } else if ($truthy($rb_le(total, $rb_divide(target, 16)))) {
        return " ＞ 16レベル成功(16LV+)"
      } else if ($truthy($rb_le(total, $rb_divide(target, 8)))) {
        return " ＞ 8レベル成功"
      } else if ($truthy($rb_le(total, $rb_divide(target, 4)))) {
        return " ＞ 4レベル成功"
      } else if ($truthy($rb_le(total, $rb_divide(target, 2)))) {
        return " ＞ 2レベル成功"
      } else {
        return " ＞ 1レベル成功"
      }; return nil; })();
      if ($truthy($rb_le(total, 1))) {
        output = $rb_plus(output, "/クリティカル")};
      return output;
    }, $InfiniteFantasia_check_1D20$1.$$arity = 4), nil) && 'check_1D20';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
