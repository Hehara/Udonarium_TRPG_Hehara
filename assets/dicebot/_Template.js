/* Generated by Opal 1.0.3 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send;

  Opal.add_stubs(['$setPrefixes']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'Template');

    var $nesting = [self].concat($parent_nesting), $Template_initialize$1, $Template_changeText$2, $Template_rollDiceCommand$3, $Template_check_2D6$4, $Template_check_nD6$5, $Template_check_nD10$6, $Template_check_1D100$7, $Template_check_1D20$8;

    
    Opal.const_set($nesting[0], 'ID', "SystemID");
    Opal.const_set($nesting[0], 'NAME', "ゲームシステム名");
    Opal.const_set($nesting[0], 'SORT_KEY', "けえむしすてむめい");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "ヘルプメッセージ\n" + "ダイスボットの使い方をここに記述します。\n");
    self.$setPrefixes([]);
    
    Opal.def(self, '$initialize', $Template_initialize$1 = function $$initialize() {
      var $iter = $Template_initialize$1.$$p, $yield = $iter || nil, self = this, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) $Template_initialize$1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      return $send(self, Opal.find_super_dispatcher(self, 'initialize', $Template_initialize$1, false), $zuper, $iter)
    }, $Template_initialize$1.$$arity = 0);
    
    Opal.def(self, '$changeText', $Template_changeText$2 = function $$changeText(string) {
      var self = this;

      return string
    }, $Template_changeText$2.$$arity = 1);
    
    Opal.def(self, '$rollDiceCommand', $Template_rollDiceCommand$3 = function $$rollDiceCommand(_command) {
      var self = this;

      return ""
    }, $Template_rollDiceCommand$3.$$arity = 1);
    
    Opal.def(self, '$check_2D6', $Template_check_2D6$4 = function $$check_2D6(_total_n, _dice_n, _signOfInequality, _diff, _dice_cnt, _dice_max, _n1, _n_max) {
      var self = this;

      return ""
    }, $Template_check_2D6$4.$$arity = 8);
    
    Opal.def(self, '$check_nD6', $Template_check_nD6$5 = function $$check_nD6(_total_n, _dice_n, _signOfInequality, _diff, _dice_cnt, _dice_max, _n1, _n_max) {
      var self = this;

      return ""
    }, $Template_check_nD6$5.$$arity = 8);
    
    Opal.def(self, '$check_nD10', $Template_check_nD10$6 = function $$check_nD10(_total_n, _dice_n, _signOfInequality, _diff, _dice_cnt, _dice_max, _n1, _n_max) {
      var self = this;

      return ""
    }, $Template_check_nD10$6.$$arity = 8);
    
    Opal.def(self, '$check_1D100', $Template_check_1D100$7 = function $$check_1D100(_total_n, _dice_n, _signOfInequality, _diff, _dice_cnt, _dice_max, _n1, _n_max) {
      var self = this;

      return ""
    }, $Template_check_1D100$7.$$arity = 8);
    return (Opal.def(self, '$check_1D20', $Template_check_1D20$8 = function $$check_1D20(_total_n, _dice_n, _signOfInequality, _diff, _dice_cnt, _dice_max, _n1, _n_max) {
      var self = this;

      return ""
    }, $Template_check_1D20$8.$$arity = 8), nil) && 'check_1D20';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
