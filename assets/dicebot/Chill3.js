/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy;

  Opal.add_stubs(['$==', '$%', '$floor', '$/', '$>', '$<=']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'Chill3');

    var $nesting = [self].concat($parent_nesting), $Chill3_check_1D100$1;

    
    Opal.const_set($nesting[0], 'ID', "Chill3");
    Opal.const_set($nesting[0], 'NAME', "Chill 3");
    Opal.const_set($nesting[0], 'SORT_KEY', "ちる3");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・1D100で判定時に成否、Botchを判定\n" + "　例）1D100<=50\n" + "　　　Chill3 : (1D100<=50) ＞ 55 ＞ Botch\n");
    return (Opal.def(self, '$check_1D100', $Chill3_check_1D100$1 = function $$check_1D100(total, dice_total, cmp_op, target) {
      var $a, self = this, tens = nil, ones = nil;

      
      if (cmp_op['$==']("<=")) {
      } else {
        return ""
      };
      tens = $rb_divide(dice_total, 10).$floor()['$%'](10);
      ones = dice_total['$%'](10);
      if (tens['$=='](ones)) {
        if ($truthy(($truthy($a = $rb_gt(total, target)) ? $a : dice_total['$=='](100)))) {
          if ($truthy($rb_gt(target, 100))) {
            return " ＞ 失敗"
          } else {
            return " ＞ Botch"
          }
        } else {
          return " ＞ Ｃ成功"
        }
      } else if ($truthy(($truthy($a = $rb_le(total, target)) ? $a : dice_total['$=='](1)))) {
        if ($truthy($rb_le(total, $rb_divide(target, 2)))) {
          return " ＞ Ｈ成功"
        } else {
          return " ＞ Ｌ成功"
        }
      } else {
        return " ＞ 失敗"
      };
    }, $Chill3_check_1D100$1.$$arity = 4), nil) && 'check_1D100';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
