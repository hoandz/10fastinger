var resultPanel = Vue.component('resultPanel',{
  template: `
    <div class="tile is-4 result">
      <div class="text-result">Result</div>
      <div class="wpm"><span id="wpm">{{ resultData.wpm }}</span> WPM</div>
      <div class="value-rls">
        <div class="value-left">
          Keystrokes:
        </div>
        <div class="value-right">
          <span id="accuracy"><span>{{ resultData.countKeystrokes }}</span> (<span style="color: #46cfc9;">{{ resultData.keystrokesCorrect }}</span> | <span style="color: red;">{{ resultData.keystrokesWrong }}</span>)</span>
        </div>
      </div>
      <div class="value-rls">
        <div class="value-left">
          Accuracy:
        </div>
        <div class="value-right">
          <span id="accuracy">{{ resultData.accuracy }}</span>%
        </div>
      </div>
      <div class="value-rls">
        <div class="value-left">
          Correct Words:
        </div>
        <div class="value-right">
          <span id="correctWords">{{ resultData.corectWords }}</span>
        </div>
      </div>
      <div class="value-rls">
        <div class="value-left">
          Wrong Words:
        </div>
        <div class="value-right">
          <span id="wrongWords">{{ resultData.wrongWords }}</span>
        </div>
      </div>
      <button class="button is-primary btn-icon-fb">
        <span class="icon">
          <i class="fab fa-facebook-f"></i>
        </span>
        <span>Facebook</span>
      </button>
    </div>
  `,
  props:[
    'resultData'
  ],
  data() {
    return {

    }
  },
  methods: {

  }
})