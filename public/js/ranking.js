var rankingPanel = Vue.component('rankingPanel', {
  template: `
      <div class="ranking-table">
            <div class="competition">Competition Ranking</div>
            <div class="sl-user-test"><span>25 tests taken by 15 competitors</span></div>
            <table class="table table-rank">
              <thead>
                <tr>
                  <th><abbr></abbr></th>
                  <th></th>
                  <th><abbr>Username</abbr></th>
                  <th><abbr>WPM</abbr></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td><img class="avt-user" src="img/anhdep.jpg" alt=""></td>
                  <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a>
                  </td>
                  <td>23</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td><img class="avt-user" src="img/anhdep.jpg" alt=""></td>
                  <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a>
                  </td>
                  <td>23</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td><img class="avt-user" src="img/anhdep.jpg" alt=""></td>
                  <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a>
                  </td>
                  <td>23</td>
                </tr>
                <tr class="is-selected">
                  <th>4</th>
                  <td><img class="avt-user" src="img/anhdep.jpg" alt=""></td>
                  <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a>
                  </td>
                  <td>23</td>
                </tr>
                <tr>
                  <th>5</th>
                  <td><img class="avt-user" src="img/anhdep.jpg" alt=""></td>
                  <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a>
                  </td>
                  <td>23</td>
                </tr>
              </tbody>
            </table>
          </div>
  `
})