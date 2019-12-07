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
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$==', '$<=', '$>=', '$upcase', '$===', '$textFrom1D6Table', '$to_i', '$last_match', '$getSkillList', '$textFrom2D6Table', '$textFromD66Table', '$getD66', '$assoc', '$get_table_by_1d6', '$nil?', '$+', '$get_table_by_2d6', '$[]', '$-']);
  return (function($base, $super, $parent_nesting) {
    function $StratoShout(){};
    var self = $StratoShout = $klass($base, $super, 'StratoShout', $StratoShout);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_StratoShout_initialize_1, TMP_StratoShout_gameName_2, TMP_StratoShout_gameType_3, TMP_StratoShout_getHelpMessage_4, TMP_StratoShout_check_2D6_5, TMP_StratoShout_rollDiceCommand_6, TMP_StratoShout_textFromD66Table_7, TMP_StratoShout_textFrom1D6Table_8, TMP_StratoShout_textFrom2D6Table_9, TMP_StratoShout_getSkillList_10;

    
    self.$setPrefixes(["VOT", "GUT", "BAT", "KEYT", "DRT", "EMO", "AT[1-6]?", "SCENE", "MACHI", "GAKKO", "BAND", "TENKAI"]);
    
    Opal.defn(self, '$initialize', TMP_StratoShout_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_StratoShout_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_StratoShout_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_StratoShout_initialize_1, false), $zuper, $iter);
      self.sendMode = 2;
      self.sortType = 1;
      return (self.d66Type = 2);
    }, TMP_StratoShout_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_StratoShout_gameName_2 = function $$gameName() {
      var self = this;

      return "ストラトシャウト"
    }, TMP_StratoShout_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_StratoShout_gameType_3 = function $$gameType() {
      var self = this;

      return "StratoShout"
    }, TMP_StratoShout_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_StratoShout_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "\n" + "VOT, GUT, BAT, KEYT, DRT: (ボーカル、ギター、ベース、キーボード、ドラム)トラブル表\n" + "EMO: 感情表\n" + "AT[1-6]: 特技表(空: ランダム 1: 主義 2: 身体 3: モチーフ 4: エモーション 5: 行動 6: 逆境)\n" + "SCENE, MACHI, GAKKO, BAND: (汎用、街角、学校、バンド)シーン表 接近シーンで使用\n" + "TENKAI: シーン展開表 奔走シーン 練習シーンで使用\n" + "\n" + "[]内は省略可　D66入れ替えあり\n"
    }, TMP_StratoShout_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$check_2D6', TMP_StratoShout_check_2D6_5 = function $$check_2D6(total_n, dice_n, signOfInequality, diff, _dice_cnt, _dice_max, _n1, _n_max) {
      var self = this;

      
      if (signOfInequality['$=='](">=")) {
        } else {
        return ""
      };
      if ($truthy($rb_le(dice_n, 2))) {
        return " ＞ ファンブル！ (ドラマフェイズ: 【ディスコード】+2 / ライブフェイズ: 【コンディション】-2)"
      } else if ($truthy($rb_ge(dice_n, 12))) {
        return " ＞ スペシャル！ (【コンディション】+2)"
      } else if ($truthy($rb_ge(total_n, diff))) {
        return " ＞ 成功"
        } else {
        return " ＞ 失敗"
      };
    }, TMP_StratoShout_check_2D6_5.$$arity = 8);
    
    Opal.defn(self, '$rollDiceCommand', TMP_StratoShout_rollDiceCommand_6 = function $$rollDiceCommand(command) {
      var self = this, $case = nil, title = nil, table = nil, value = nil;

      
      $case = command.$upcase();
      if ("VOT"['$===']($case)) {
      title = "ボーカルトラブル表(P167)";
      table = ["歌詞を忘れてしまった！ 何も言葉が出てこない……", "マイクのコードに足を引っ掛けてしまった！ 危ない！", "マイクスタンドが倒れてしまった！", "音程がズレているけど、なかなか直せない！", "リズムがズレてきている気がする……修正できない！", "喉が枯れそうだ。まずい、セーブしないと……！"];
      return self.$textFrom1D6Table(title, table);}
      else if ("GUT"['$===']($case)) {
      title = "ギタートラブル表(P169)";
      table = ["やべっ、コードを間違えた！ どうにかごまかそう……", "ゲッ、シールド(信号を伝えるコード)が抜けちゃった！ 音が出ない！", "ギターの音にノイズが乗ってるような……直ってくれ……！", "あれ？ 今曲のどの辺りだっけ……？", "弦が切れてしまった！ なんて不吉な……。", "ピックが飛んでった！ 指で弾くしかない……！"];
      return self.$textFrom1D6Table(title, table);}
      else if ("BAT"['$===']($case)) {
      title = "ベーストラブル表(P171)";
      table = ["やべっ、コードを間違えた！ どうにかごまかそう……", "ゲッ、シールド(信号を伝えるコード)が抜けちゃった！ 音が出ない！", "ベースの音にノイズが乗ってるような……直ってくれ……！", "あれ？ 今曲のどの辺りだっけ……？", "指先の感覚が麻痺してきた。動かない……！", "テンポが速くなってきているけど、止まらない！"];
      return self.$textFrom1D6Table(title, table);}
      else if ("KEYT"['$===']($case)) {
      title = "キーボードトラブル表(P173)";
      table = ["指先の感覚が麻痺してきた。動かない……！", "音量のスライドに触れてしまった！ 爆音が出てしまう！", "あれ？ 今曲のどの辺りだっけ……？", "音の出ない鍵がある……故障！？", "音色を間違えた！ 元の音色は何番だっけ……！？", "手を置く位置が一つズレてる……！ 不協和音だ！"];
      return self.$textFrom1D6Table(title, table);}
      else if ("DRT"['$===']($case)) {
      title = "ドラムトラブル表(P175)";
      table = ["手がこんがらがってきた！ 軌道修正しないと……！", "あれ？ 今曲のどの辺りだっけ……？", "ハイハットが開かない！ ネジが緩んでるのか……！？", "アドリブ入れたけど、次のフレーズが思いつかない……！", "テンポが速くなってきているけど、止まらない！", "スティックが飛んでった！ 代わりはどこだっけ……。"];
      return self.$textFrom1D6Table(title, table);}
      else if ("EMO"['$===']($case)) {
      title = "感情表(P183)";
      table = ["共感/不信", "友情/嫉妬", "好敵手/苛立ち", "不可欠/敬遠", "尊敬/劣等感", "愛情/負い目"];
      return self.$textFrom1D6Table(title, table);}
      else if (/^AT([1-6]?)$/['$===']($case)) {
      value = Opal.const_get_relative($nesting, 'Regexp').$last_match(1).$to_i();
      return self.$getSkillList(value);}
      else if ("SCENE"['$===']($case)) {
      title = "シーン表(P199)";
      table = ["一人の時間。ふと過去の記憶を辿る。そういえば以前、あんなことがあったような……。", "どこからか、言い争っているような声が聞こえてきた。喧嘩だろうか？", "夜の帳が下り、辺りは静寂に包まれている。あいつは今、何をしているだろう。", "仲間と一緒にご飯を食べていると、会話は自然とあの話に……。", "笑い声に満ちた空間。ずっとこんな時間が続けばいいのに。", "日の当たる場所。毎日の忙しさを離れ、穏やかな時間が過ぎていく。", "スマートフォンに着信の通知がついていた。電話？ メッセージ？ 誰からだろう。", "突然、あなたのもとに来訪者が現れた。何か伝えたいことがあるようだ。", "誰かの忘れ物を見つけた。届けてあげたほうがいいだろうか。", "誰かが噂話をしている。聞くつもりはなくとも、それは勝手に耳に入ってきた。", "なんだか悪寒がする。なにか良くないことが起きているような……。"];
      return self.$textFrom2D6Table(title, table);}
      else if ("MACHI"['$===']($case)) {
      title = "街角シーン表(P199)";
      table = ["入ったことのない場所に、初めて足を踏み入れた。少し緊張してしまうな。", "アルバイト先。バイト仲間から、意外なことを教えられた。", "会話もままならないような、大音量の音楽。その場にいるだけで気分が高揚する。", "横断歩道で信号を待っていると、見知った人物の姿を見つけた。", "突然の雨に、慌てて足を早める人々。自分も早く帰らなければ。", "何気なく立ち寄った店の中で、知人とばったり。こんなところで何を？", "練習を終えて立ち寄った飲食店で、意外な人物を発見。少し様子を見てみよう。", "あちこちから子どもたちのはしゃぎ声が聞こえてくる。自分にもあんな頃があったんだろうか。", "音のない、静寂の世界。たまには音から離れるのもいいものだ。", "電車の中。つり革に掴まりながら揺られていると、見覚えのある乗客を見つけた。", "カラオケの廊下を歩いていると、どこからか聞き覚えのある声が……？"];
      return self.$textFrom2D6Table(title, table);}
      else if ("GAKKO"['$===']($case)) {
      title = "学校シーン表(P199)";
      table = ["校舎裏、何かを話す二人組を見かけた。一体何を話しているのだろう……？", "とある部室。部員たちは集中して部活に励んでいるようだが……。", "先生から、ターゲットについて尋ねられた。なにか気になることがあるようだ。", "木々の隙間から朝日差し込む通学路。ある者は忙しそうに、またある者は楽しそうに校舎へ向かっている。", "休み時間。教室のあちこちで飛び交う、他愛のない噂話。その中から、気になる会話が聞こえてきた。", "何もかもが茜色に染まる夕暮れ時。生徒たちは学業から解放され、自由に残り少ない一日を過ごしている。", "移動教室だ。渡り廊下から下を見ると、見覚えのある人物がいた。", "昼休み。生徒は思い思いの場所で昼食を取っている。さて、自分はどこで食べようか。", "先生から頼まれごとを引き受けてしまった。さっさと済ませてしまおう。", "そろそろ学校が閉まる時間だ。明かりのついている教室はもうほとんどない。", "スピーカーから校内放送が聞こえた。誰かを呼んでいるようだが……？"];
      return self.$textFrom2D6Table(title, table);}
      else if ("BAND"['$===']($case)) {
      title = "バンドシーン表(P199)";
      table = ["音楽専門のニュースサイトをチェック。大小様々な記事が投稿されている。", "意外なところで練習している人物を発見。少し声をかけてみようか。", "ちょっとした壁に衝突。誰かに相談した方がいいかも……。", "ライブを見るためライブハウスへとやってきた。どんなステージになるのだろう。", "打ち合わせに行ったライブハウス。来ているのは自分たちだけじゃないようだ。", "練習が終わった帰り道。あいつも練習が終わった頃だろうか。", "どこからか楽器の音が聞こえてくる。誰か演奏しているのだろうか。", "熱気のこもる部屋を出て、スタジオの待合室でクールダウン。ソファに座っているのは……。", "訪れた楽器店で、見知った人物を発見。何をしに来ているのだろう。", "最新のヒット曲が流れるCDショップの店内。次はどんな曲をやろうか……。", "何気なく鳴らした音から、突発セッションに発展。軽く実力を見せつけてやろう。"];
      return self.$textFrom2D6Table(title, table);}
      else if ("TENKAI"['$===']($case)) {
      title = "シーン展開表(P201)";
      table = [[11, "絶望: ステップを更に大きくする、あるいはシーンプレイヤーを破滅に追い込むような状況に陥ります。【ディスコード】+2点。"], [12, "崩壊: ステップによってシーンプレイヤーの大切なものが崩壊する、あるいは崩壊目前に追い込まれます。【ディスコード】+2点。"], [13, "断絶: シーンプレイヤーはステップによって何かと絶縁状態になります。【ディスコード】+2点。"], [14, "恐怖: ステップに恐怖するような出来事に遭遇します。【ディスコード】+2点。"], [15, "誤解: シーンプレイヤーがステップに関するなんらかの誤解を受けます。【ディスコード】+2点。"], [16, "試練: シーンプレイヤーはステップに関連した試練に直面します。【ディスコード】+2点。"], [22, "悪心: シーンプレイヤーの心に魔が差し、ステップを不合理に解決しようとします。【ディスコード】+1点。"], [23, "束縛: ステップに関わるなんらかに束縛され、自由な行動ができなくなります。【ディスコード】+1点。"], [24, "凶兆: ステップについて、悪いことが起きそうな前触れが訪れます。【ディスコード】+1点。"], [25, "加速: シーンプレイヤーはステップの解決に追われます。【ディスコード】+1点。"], [26, "日常: シーンプレイヤーはのんびりとした日常を送ります。【コンディション】+1点。"], [33, "休息: ステップを忘れられるような、穏やかなひとときを過ごします。【コンディション】+1点。"], [34, "吉兆: ステップについて、いいことが起きそうな前触れが訪れます。【コンディション】+1点。"], [35, "発見: シーンプレイヤーはステップについて何かを発見します。【コンディション】+1点。"], [36, "希望: シーンプレイヤーの中に、ステップに対して前向きに取り組む意思が生まれます。【コンディション】+1点。"], [44, "成長: ステップを通して、シーンプレイヤーが成長します。【コンディション】+2点。"], [45, "愛情: ステップを通して、シーンプレイヤーが愛情に触れます。【コンディション】+2点。"], [46, "朗報: ステップに関する良い知らせが舞い込みます。【コンディション】+2点。"], [55, "好転: ステップが良い方向に向かうような事件が起きます。【コンディション】+3点。"], [56, "直感: ステップを解決させる決定的な閃きを得ます。【コンディション】+3点。"], [66, "奇跡: ステップに関して、奇跡的な幸運が舞い込みます。【コンディション】+3点。"]];
      return self.$textFromD66Table(title, table);};
      return nil;
    }, TMP_StratoShout_rollDiceCommand_6.$$arity = 1);
    
    Opal.defn(self, '$textFromD66Table', TMP_StratoShout_textFromD66Table_7 = function $$textFromD66Table(title, table) {
      var $a, $b, self = this, isSwap = nil, dice = nil, number = nil, text = nil;

      
      isSwap = true;
      dice = self.$getD66(isSwap);
      $b = table.$assoc(dice), $a = Opal.to_ary($b), (number = ($a[0] == null ? nil : $a[0])), (text = ($a[1] == null ? nil : $a[1])), $b;
      return "" + (title) + " ＞ [" + (number) + "] ＞ " + (text);
    }, TMP_StratoShout_textFromD66Table_7.$$arity = 2);
    
    Opal.defn(self, '$textFrom1D6Table', TMP_StratoShout_textFrom1D6Table_8 = function $$textFrom1D6Table(title, table1, table2) {
      var $a, $b, self = this, text1 = nil, number1 = nil, text = nil, text2 = nil, number2 = nil;

      if (table2 == null) {
        table2 = nil;
      }
      
      $b = self.$get_table_by_1d6(table1), $a = Opal.to_ary($b), (text1 = ($a[0] == null ? nil : $a[0])), (number1 = ($a[1] == null ? nil : $a[1])), $b;
      text = "" + (title) + " ＞ ";
      if ($truthy(table2['$nil?']())) {
        text = $rb_plus(text, "" + "[" + (number1) + "] ＞ " + (text1))
        } else {
        
        $b = self.$get_table_by_1d6(table2), $a = Opal.to_ary($b), (text2 = ($a[0] == null ? nil : $a[0])), (number2 = ($a[1] == null ? nil : $a[1])), $b;
        text = $rb_plus(text, "" + "[" + (number1) + "," + (number2) + "] ＞ " + (text1) + (text2));
      };
      return text;
    }, TMP_StratoShout_textFrom1D6Table_8.$$arity = -3);
    
    Opal.defn(self, '$textFrom2D6Table', TMP_StratoShout_textFrom2D6Table_9 = function $$textFrom2D6Table(title, table) {
      var $a, $b, self = this, text = nil, number = nil;

      
      $b = self.$get_table_by_2d6(table), $a = Opal.to_ary($b), (text = ($a[0] == null ? nil : $a[0])), (number = ($a[1] == null ? nil : $a[1])), $b;
      return "" + (title) + " ＞ [" + (number) + "] ＞ " + (text);
    }, TMP_StratoShout_textFrom2D6Table_9.$$arity = 2);
    return (Opal.defn(self, '$getSkillList', TMP_StratoShout_getSkillList_10 = function $$getSkillList(field) {
      var $a, $b, self = this, title = nil, table = nil, number1 = nil, fieldName = nil, skill = nil, number2 = nil, text = nil;

      if (field == null) {
        field = 0;
      }
      
      title = "特技リスト";
      table = [["主義", ["過去", "恋人", "仲間", "家族", "自分", "今", "理由", "夢", "世界", "幸せ", "未来"]], ["身体", ["頭", "目", "耳", "口", "胸", "心臓", "血", "背中", "手", "XXX", "足"]], ["モチーフ", ["闇", "武器", "魔法", "獣", "町", "歌", "食べ物", "花", "空", "季節", "光"]], ["エモーション", ["悲しい", "怒り", "不安", "恐怖", "驚き", "高鳴り", "情熱", "確信", "期待", "楽しい", "喜び"]], ["行動", ["泣く", "忘れる", "消す", "壊す", "叫ぶ", "歌う", "踊る", "走る", "鳴らす", "呼ぶ", "笑う"]], ["逆境", ["死", "喪失", "暴力", "孤独", "後悔", "実力", "退屈", "権力", "富", "恋愛", "生"]]];
      number1 = 0;
      if (field['$=='](0)) {
        $b = self.$get_table_by_1d6(table), $a = Opal.to_ary($b), (table = ($a[0] == null ? nil : $a[0])), (number1 = ($a[1] == null ? nil : $a[1])), $b
        } else {
        table = table['$[]']($rb_minus(field, 1))
      };
      $b = table, $a = Opal.to_ary($b), (fieldName = ($a[0] == null ? nil : $a[0])), (table = ($a[1] == null ? nil : $a[1])), $b;
      $b = self.$get_table_by_2d6(table), $a = Opal.to_ary($b), (skill = ($a[0] == null ? nil : $a[0])), (number2 = ($a[1] == null ? nil : $a[1])), $b;
      text = title;
      if (field['$=='](0)) {
        text = $rb_plus(text, "" + " ＞ [" + (number1) + "," + (number2) + "]")
        } else {
        text = $rb_plus(text, "" + "(" + (fieldName) + "分野) ＞ [" + (number2) + "]")
      };
      return "" + (text) + " ＞ 《" + (skill) + "／" + (fieldName) + (number2) + "》";
    }, TMP_StratoShout_getSkillList_10.$$arity = -1), nil) && 'getSkillList';
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
