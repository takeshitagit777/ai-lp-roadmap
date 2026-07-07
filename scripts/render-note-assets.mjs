import path from 'node:path';
import { fileURLToPath } from 'node:url';
import playwright from '../../Tagit/node_modules/playwright/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(rootDir, 'note', 'images');
const { chromium } = playwright;

const theme = `
  * { box-sizing: border-box; }
  body {
    margin: 0;
    width: 1600px;
    height: 900px;
    font-family: "Noto Sans JP", "Yu Gothic", system-ui, sans-serif;
    color: #101418;
    background:
      radial-gradient(circle at 12% 8%, rgba(223,248,107,.55), transparent 25%),
      radial-gradient(circle at 88% 22%, rgba(15,138,99,.2), transparent 28%),
      linear-gradient(135deg, #fbfaf5, #eef4ea);
  }
  .frame {
    width: 1480px;
    height: 780px;
    margin: 60px;
    padding: 64px;
    border-radius: 54px;
    background: rgba(255,255,255,.78);
    box-shadow: 0 34px 90px rgba(16,20,24,.14);
    position: relative;
    overflow: hidden;
  }
  .frame:after {
    content: "";
    position: absolute;
    right: -180px;
    bottom: -220px;
    width: 560px;
    height: 560px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(223,248,107,.8), transparent 68%);
  }
  .content { position: relative; z-index: 2; }
  .eyebrow {
    color: #0f8a63;
    font-weight: 900;
    letter-spacing: .16em;
    font-size: 26px;
    margin-bottom: 24px;
  }
  h1 {
    margin: 0;
    font-size: 94px;
    line-height: 1.1;
    letter-spacing: -.05em;
  }
  h2 {
    margin: 0 0 34px;
    font-size: 64px;
    line-height: 1.2;
    letter-spacing: -.04em;
  }
  p {
    color: #516171;
    font-size: 30px;
    line-height: 1.75;
  }
  .pill {
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    padding: 18px 30px;
    background: #101418;
    color: #fff;
    font-size: 26px;
    font-weight: 900;
  }
  .green { color: #0f8a63; }
  .grid { display: grid; gap: 24px; }
  .card {
    border: 1px solid rgba(16,20,24,.1);
    border-radius: 30px;
    background: rgba(255,255,255,.82);
    box-shadow: 0 18px 44px rgba(16,20,24,.08);
  }
`;

const assets = [
  {
    name: '00-cover.png',
    html: `
      <div class="frame">
        <div class="content" style="max-width: 980px;">
          <div class="eyebrow">AI LP制作ロードマップ</div>
          <h1>画像1枚から<br>LPを作り、公開して、営業するまで。</h1>
          <p style="max-width: 860px;">Codex / ChatGPTで制作、GitHub、Vercel、ポートフォリオ掲載、営業文作成までを一気通貫で進める実践キット。</p>
          <div style="display:flex;gap:18px;align-items:center;margin-top:40px;">
            <span class="pill">20,000円</span>
            <span style="font-size:30px;font-weight:900;">月15万円を目指すロードマップ</span>
          </div>
        </div>
      </div>
    `
  },
  {
    name: '01-roadmap.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">ROADMAP</div>
          <h2>LP制作を仕事にする5ステップ</h2>
          <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:18px;margin-top:54px;">
            ${['画像を用意', 'AIで実装', 'GitHubへpush', 'Vercel公開', '営業する'].map((t, i) => `
              <div class="card" style="height:320px;padding:30px;display:flex;flex-direction:column;justify-content:space-between;">
                <div style="width:62px;height:62px;border-radius:50%;background:#dff86b;display:grid;place-items:center;font-size:30px;font-weight:900;">${i + 1}</div>
                <strong style="font-size:34px;line-height:1.25;">${t}</strong>
                <p style="font-size:22px;margin:0;">ここで止まらない仕組みを作る</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `
  },
  {
    name: '02-income-model.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">INCOME MODEL</div>
          <h2>月15万円を目指す<br>現実的な組み立て方</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:46px;">
            <div class="card" style="padding:42px;">
              <div style="font-size:32px;font-weight:900;color:#0f8a63;">プランA</div>
              <div style="font-size:76px;font-weight:900;margin:18px 0;">5万円 × 3件</div>
              <p>LP制作を月3件。小規模事業者向けに提案しやすい。</p>
            </div>
            <div class="card" style="padding:42px;">
              <div style="font-size:32px;font-weight:900;color:#0f8a63;">プランB</div>
              <div style="font-size:76px;font-weight:900;margin:18px 0;">3万円 × 5件</div>
              <p>既存サイト改善やファーストビュー改善で受注する。</p>
            </div>
          </div>
          <p style="font-size:24px;margin-top:26px;">※成果保証ではありません。営業量・提案内容・市場状況で結果は変わります。</p>
        </div>
      </div>
    `
  },
  {
    name: '03-ai-workflow.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">AI WORKFLOW</div>
          <h2>AIに任せること / 人が見ること</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:40px;">
            <div class="card" style="padding:40px;">
              <strong style="font-size:44px;color:#0f8a63;">AIに任せる</strong>
              <ul style="font-size:30px;line-height:2;margin-top:28px;">
                <li>LP構成の分解</li>
                <li>React実装</li>
                <li>営業文の下書き</li>
                <li>改善案の洗い出し</li>
              </ul>
            </div>
            <div class="card" style="padding:40px;">
              <strong style="font-size:44px;">人が見る</strong>
              <ul style="font-size:30px;line-height:2;margin-top:28px;">
                <li>画像と文字の違和感</li>
                <li>CTAが押される導線</li>
                <li>相手に合った提案</li>
                <li>公開後の表示確認</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: '04-sales-template.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">SALES TEMPLATE</div>
          <h2>営業文はこの型で作る</h2>
          <div class="card" style="padding:44px;margin-top:36px;">
            ${['相手の良い点を1つ伝える', '改善できそうな点を1つだけ出す', '無料で改善ラフを作れると伝える', '返信ハードルを下げる'].map((t, i) => `
              <div style="display:grid;grid-template-columns:76px 1fr;gap:22px;align-items:center;margin-bottom:24px;">
                <div style="width:64px;height:64px;border-radius:20px;background:#101418;color:#fff;display:grid;place-items:center;font-size:28px;font-weight:900;">${i + 1}</div>
                <div style="font-size:36px;font-weight:900;">${t}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `
  },
  {
    name: '05-checklist.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">CHECKLIST</div>
          <h2>公開前に見るべき8項目</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:36px;">
            ${['PC/スマホで崩れていない', 'CTAがすぐ見つかる', '画像が表示されている', 'npm run build成功', 'GitHubにpush済み', 'Vercelで公開済み', 'スクショを撮影済み', 'ポートフォリオ掲載済み'].map((t) => `
              <div class="card" style="padding:24px 30px;font-size:30px;font-weight:900;">□ ${t}</div>
            `).join('')}
          </div>
        </div>
      </div>
    `
  },
  {
    name: '06-bonus-stack.png',
    html: `
      <div class="frame">
        <div class="content">
          <div class="eyebrow">BONUS</div>
          <h2>購入者に渡すテンプレ一式</h2>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px;">
            ${['LP制作プロンプト集', '業種別LP構成テンプレ', 'Vercelエラー対応集', '営業文テンプレ', 'ヒアリングシート', '特商法表記テンプレ'].map((t) => `
              <div class="card" style="padding:34px;height:150px;display:flex;align-items:center;font-size:31px;font-weight:900;">${t}</div>
            `).join('')}
          </div>
        </div>
      </div>
    `
  }
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });

for (const asset of assets) {
  await page.setContent(`<!doctype html><html><head><meta charset="UTF-8"><style>${theme}</style></head><body>${asset.html}</body></html>`);
  await page.screenshot({ path: path.join(outputDir, asset.name), fullPage: false });
  console.log(`note/images/${asset.name}`);
}

await browser.close();
