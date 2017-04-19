
<blockquote dir="rtl">
<p dir="rtl"><a href="README.md">Read Me in English</a></p>
</blockquote>
<h1 dir="rtl"><a id="_________2"></a>قالب ساس لليمين الى اليسار و اليسار إلى اليمين</h1>
<blockquote dir="rtl">
<p dir="rtl">حان الوقت للانتقال من css التقليدي و اعط نفسك انطلاقة سريعة مع هذا القالب.</p>
</blockquote>
<p dir="rtl">العديد من مبرمجي واجهات الويب في المنطقة العربية يعانون اثناء العمل على المواقع ذات اللغة العربية و الانجليزية، فبعد الانتهاء من التقطيع عليه ان يقوم بتحويل الاتجاهات يدويا أو حتى عبر رفع ملف css الى مواقع لتقوم بذلك، و لكن تبقى هناك بعض الاخطاء التي تتطلب التدخل اليدوي.<br>
هذا القالب سيساعدك في تخطي هذه المعضلة، كل ما عليك هو ان تقوم بكتابة أكواد sass/scss لمرة واحدة، و سيقوم القالب بترجمتها إلى ملفات داعمة للاتجاهين.<br>
اضافة إلى ذلك سيتم تجميل الكود او / و ضغطه في الملفات النهائية.</p>
<h2 dir="rtl"><a id="____9"></a>التثبيت / قبل البدء</h2>
<p dir="rtl">اذا كنت قمت بتثبيت هذه الادوات مسبقا، قم بتجاوز المتطلبات المسبقة<br>
<code>NodeJS</code>,<code>SASS</code>,<code>Git</code></p>
<h3 dir="rtl"><a id="__13"></a>المتطلبات المسبقة</h3>
<p dir="rtl">هذا القالب يعتمد على هذه البرمجيات و يجب ان تكون مثبتة لديك قبل الاستمرار في استخدامه.</p>
<blockquote dir="rtl">
<p dir="rtl"><a href="https://nodejs.org/en/">Node.js</a></p>
</blockquote>
<blockquote dir="rtl">
<p dir="rtl"><a href="http://sass-lang.com/install">Sass</a></p>
</blockquote>
<blockquote dir="rtl">
<p dir="rtl"><a href="https://www.atlassian.com/git/tutorials/install-git">Git</a></p>
</blockquote>
<h2 dir="rtl"><a id="_24"></a>التثبيت</h2>
<p dir="rtl">قم بتحميل المستودع إلى جهازك كملف مضغوط او عبر نسخه الى سطح المكتب عن طريق الامر التالي من شاشة الاوامر</p>
<pre><code class="language-bash">git <span class="hljs-built_in">clone</span> https://github.com/ameensom/ltr-rtl-sass-starter-template.git
<span class="hljs-built_in">cd</span> ltr-rtl-sass-starter-template/
npm install
</code></pre>
<ul dir="rtl">
<li>الامر الاول سينسخ المستودع إلى جهازك</li>
<li>الامر الثاني للدخول إلى مجلد المستودع</li>
<li>الامر الثالث لتثبيت الحزم اللازمة من NPM</li>
</ul>
<h3 dir="rtl"><a id="_36"></a>البناء</h3>
<p dir="rtl">بعد تثبيت الحزم اللازمة قم بإدخال الامر التالي :</p>
<pre><code class="language-bash">gulp
</code></pre>
<p dir="rtl">سيقوم الامر بفتح المتصفح و التوجه الى العنوان التالي : <code>http://localhost:3000</code> و من هناك يمكنك الضغط على اسم اللغة المطلوبة.<br>
يمكنك مشاهدة صفحة <strong>index.html</strong> الافتراضية التي قمت بتضمينها مع القالب.</p>
<h2 dir="rtl"><a id="__46"></a>طريقة الاستخدام</h2>
<p dir="rtl">عند كتابتك لأكواد sass/scss قم بإستخدام المتغييرات  <code>$direction</code> <code>$reverse-direction</code> بدلا عن <code>Right</code> و <code>Left</code>.</p>
<h3 dir="rtl"><a id="_49"></a>مثال</h3>
<p dir="rtl"><strong>كقيمة</strong></p>
<pre><code class="language-scss"><span class="hljs-class">.selector</span> {
<span class="hljs-attribute">text-align</span><span class="hljs-value">: <span class="hljs-variable">$direction</span>;</span>
<span class="hljs-attribute">float</span><span class="hljs-value">: <span class="hljs-variable">$reverse-direction</span>;</span>
}
</code></pre>
<p dir="rtl">النتيجة في ملف css ستظهر كالتالي :</p>
<p dir="rtl"><em>من اليسار الى اليمين</em></p>
<pre><code class="language-css"><span class="hljs-class">.selector</span> <span class="hljs-rules">{
    <span class="hljs-rule"><span class="hljs-attribute">text-align</span>:<span class="hljs-value"> left</span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> right</span></span>;
}</span>
</code></pre>
<p dir="rtl"><em>من اليمين إلى اليسار</em></p>
<pre><code class="language-css"><span class="hljs-class">.selector</span> <span class="hljs-rules">{
    <span class="hljs-rule"><span class="hljs-attribute">text-align</span>:<span class="hljs-value"> right</span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
}</span>
</code></pre>
<p dir="rtl"><strong>كخاصية</strong></p>
<pre><code class="language-scss"><span class="hljs-class">.selector-</span>#{<span class="hljs-variable">$direction</span>} {
    <span class="hljs-attribute">padding</span>-#{<span class="hljs-variable">$direction</span>}<span class="hljs-value">: <span class="hljs-number">10px</span>;</span>
    #{<span class="hljs-variable">$direction</span>}<span class="hljs-value">: <span class="hljs-number">10px</span>
    padding-#{<span class="hljs-variable">$reverse-direction</span>}: <span class="hljs-number">40px</span>;</span>
    #{<span class="hljs-variable">$reverse-direction</span>}<span class="hljs-value">: initial;</span>
}
</code></pre>
<p dir="rtl">النتيجة في ملف css ستظهر كالتالي :</p>
<p dir="rtl"><em>من اليسار الى اليمين</em></p>
<pre><code class="language-css"><span class="hljs-class">.selector-left</span> <span class="hljs-rules">{
    <span class="hljs-rule"><span class="hljs-attribute">padding-left</span>:<span class="hljs-value"> <span class="hljs-number">10px</span></span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">left</span>:<span class="hljs-value"> <span class="hljs-number">10px</span></span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">padding-right</span>:<span class="hljs-value"> <span class="hljs-number">40px</span></span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">right</span>:<span class="hljs-value"> initial</span></span>;
}</span>
</code></pre>
<p dir="rtl"><em>من اليمين إلى اليسار</em></p>
<pre><code class="language-css"><span class="hljs-class">.selector-right</span> <span class="hljs-rules">{
    <span class="hljs-rule"><span class="hljs-attribute">padding-right</span>:<span class="hljs-value"> <span class="hljs-number">10px</span></span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">right</span>:<span class="hljs-value"> <span class="hljs-number">10px</span></span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">padding-left</span>:<span class="hljs-value"> <span class="hljs-number">40px</span></span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">left</span>:<span class="hljs-value"> initial</span></span>;
}</span>
</code></pre>
<p dir="rtl"><strong>استخدام اضافي</strong></p>
<p dir="rtl">بإمكانك استخدام متغيير <code>$language</code> مع <code>@if</code> <code>@else</code>  الشرطية لتخصيص الأنماط للواجهة المطلوبة.</p>
<pre><code class="language-scss"><span class="hljs-tag">body</span> {
    <span class="hljs-at_rule">@<span class="hljs-function">if</span>(<span class="hljs-variable">$language</span> == <span class="hljs-string">'ar'</span>) {</span>
        <span class="hljs-attribute">direction</span><span class="hljs-value">: rtl;</span>
    }
  <span class="hljs-attribute">height</span><span class="hljs-value">: <span class="hljs-number">100%</span>;</span>
 }
</code></pre>
<p dir="rtl">النتيجة في ملف css ستظهر كالتالي :</p>
<p dir="rtl"><em>من اليسار الى اليمين</em></p>
<pre><code class="language-css"><span class="hljs-tag">body</span> <span class="hljs-rules">{
    <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100%</span></span></span>;
}</span>
</code></pre>
<p dir="rtl"><em>من اليمين إلى اليسار</em></p>
<pre><code class="language-css"><span class="hljs-tag">body</span> <span class="hljs-rules">{
    <span class="hljs-rule"><span class="hljs-attribute">direction</span>:<span class="hljs-value">rtl</span></span>;
    <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">100%</span></span></span>;
}</span>
</code></pre>
<p dir="rtl">ملاحظة :<br>
هناك متغييرات اضافية يمكنك استخدامها، قم بمعاينة <code>source\abstract\variables.scss</code> للمزيد.</p>
<h3 dir="rtl"><a id="__130"></a>هيكلة الملفات</h3>
<p dir="rtl">هيكلة الملفات بسيطة و تفسر نفسها بنفسها</p>
<pre><code>+-- build
|   +-- ltr
|       +-- css
|       +-- fonts
|       +-- images
|           +-- backgrounds
|           +-- fav
|           +-- png
|           +-- svg
|       +-- js
|       --- index.html
|   +-- rtl
|       +-- css
|       +-- fonts
|       +-- images
|           +-- backgrounds
|           +-- fav
|           +-- png
|           +-- svg
|       +-- js
|       --- index.html
|   --- index.html
+-- source
|   +-- scss
|       +-- abstracts
|       +-- base
|       +-- components
|       --- main.scss
|   --- index.handlebars
--- .csscomb.json
--- .csslintrc.json
--- .editorconfig
--- .eslintrc.json
--- .gitignore
--- .jsbeautifyrc
--- config.js
--- gulpfile.js
--- package.json
</code></pre>
<h3 dir="rtl"><a id="_HTML_172"></a>ملفات HTML</h3>
<p dir="rtl">عليك ان تقوم بإضافة ملفات HTML يدويا داخل المجلدات التالية  <strong><code>build\ltr</code></strong> و <strong><code>build\rtl</code></strong> ، قم بإنشاء مجلدات اضافية بحسب رغبتك.</p>
<h3 dir="rtl"><a id="_SCSS_175"></a>ملفات SCSS</h3>
<p dir="rtl">
ابدا بإنشاء واجهاتك الخاصة، عبر تحرير ملفات scss كأي مشروع scss آخر. هناك بعض الأسطر التي يجب ان لا يتم تعديلها و/أو حذفها، قم باضافة تعليق بجانبها لتمييزها.</p>
<h2 dir="rtl"><a id="_178"></a>المميزات</h2>
<ul dir="rtl">
<li>ترجم ملفات sass/scss الى css في مجلدين مختلفين او اكثر، و بقيم مختلفة للاتجاهات بحسب اللغة</li>
<li>دمج <a href="https://browsersync.io/">BrowserSync.io</a>، و الذي سيتيح لك اعادة التحديث التلقائي للصفحة بمجرد حفظك لأي من ملفات العمل الخاصة بك</li>
<li><a href="https://github.com/postcss/autoprefixer">AutoPreFixer</a>,<a href="https://github.com/koistya/gulp-csscomb">BeautifyCSS</a> مبني على اعدادات <a href="http://csscomb.com/">CSSComb</a> ،<a href="https://www.npmjs.com/package/gulp-minify-css">MinifyCSS</a> جميعها متضمنة في القالب و بإمكانك تفعيلها و تعطيلها بحسب رغبتك</li>
<li>هيكلة الملفات سهلة القراءة و التعديل</li>
<li>العديد من ال mixins الممتعة</li>
</ul>
<h2 dir="rtl"><a id="_185"></a>الاعدادات</h2>
<p dir="rtl">لا يوجد الكثير من الاعدادات ، و لكن يمكنك تحرير ملف  <code>config.js</code> لتعطيل او تفعيل بعض المميزات او اضافة لغة جديدة</p>
<h4><a id="languages_189"></a>languages</h4>
<p dir="rtl">نوع القيمة : <code>Array of Objects</code><br>
قيمة مطلوبة : <code>true</code></p>
<p dir="rtl">القيمة الافتراضية : </p>
<pre><code class="language-js">[{
  taskName: <span class="hljs-string">'sass_ar'</span>,
   languageCode: <span class="hljs-string">'ar'</span>,
   outputfolder: <span class="hljs-string">'rtl'</span>,
   languageName: <span class="hljs-string">'Arabic'</span>
 },
 {
   taskName: <span class="hljs-string">'sass_en'</span>,
   languageCode: <span class="hljs-string">'en'</span>,
   outputfolder: <span class="hljs-string">'ltr'</span>,
   languageName: <span class="hljs-string">'English'</span>
 }]
</code></pre>
<p dir="rtl">
هذه قائمة اللغات المستخدمة في هذا القالب، اللغة العربية و الانجليزية هما الافتراضية، يمكنك اضافة المزيد من اللغات عبر اضافة عنصر آخر الى المصفوفة.</p>
<h4><a id="languagesindextaskName_211"></a>languages[index].taskName</h4>
<p dir="rtl">نوع القيمة : <code>string</code></p>
<p dir="rtl">القيمة الافتراضية : <code>sass_ar</code>,<code>sass_en</code></p>
<p dir="rtl">قيمة فريدة : <code>true</code></p>
<p dir="rtl">قيمة مطلوبة : <code>true</code></p>
<p dir="rtl">لتحديد اسم وظيفة gulp</p>
<h4><a id="languagesindexlanguageCode_222"></a>languages[index].languageCode</h4>
<p dir="rtl">نوع القيمة : <code>string</code></p>
<p dir="rtl">القيمة الافتراضية : <code>ar</code>,<code>en</code></p>
<p dir="rtl">قيمة فريدة : <code>true</code></p>
<p dir="rtl">قيمة مطلوبة : <code>true</code></p>
<p dir="rtl">رمز اللغة ليتم استخدامه مع ملفات scss</p>
<h4><a id="languagesindexoutputfolder_233"></a>languages[index].outputfolder</h4>
<p dir="rtl">نوع القيمة : <code>string</code></p>
<p dir="rtl">القيمة الافتراضية : <code>rtl</code>,<code>ltr</code></p>
<p dir="rtl">قيمة فريدة : <code>true</code></p>
<p dir="rtl">قيمة مطلوبة : <code>true</code></p>
<p dir="rtl">المجلد الخاص باللغة و الذي سيتم حفظ ملف css بداخله</p>
<h4><a id="languagesindexlanguageName_243"></a>languages[index].languageName</h4>
<p dir="rtl">نوع القيمة : <code>string</code></p>
<p dir="rtl">القيمة الافتراضية : <code>Arabic</code>,<code>English</code></p>
<p dir="rtl">قيمة فريدة : <code>true</code></p>
<p dir="rtl">قيمة مطلوبة : <code>true</code></p>
<p dir="rtl">اسم اللغة للتعريف بالعنصر</p>
<h4><a id="autoPrefixerOptions_255"></a>autoPrefixerOptions</h4>
<p dir="rtl">نوع القيمة : <code>Object</code></p>
<p dir="rtl">القيمة الافتراضية : </p>
<pre><code class="language-js">{
  browsers: [<span class="hljs-string">'last 7 versions'</span>],
  cascade: <span class="hljs-literal">false</span>
}
</code></pre>
<p dir="rtl">للمزيد من خيارات هذه الأداة قم بالتوجه إلى <a href="https://github.com/postcss/autoprefixer#options">Autoprefixer Documentation</a> و <a href="https://github.com/ai/browserslist#queries">BrowsersList Queries</a></p>
<h4><a id="autoPrefixer_266"></a>autoPrefixer</h4>
<p dir="rtl">نوع القيمة : <code>Boolean</code></p>
<p dir="rtl">القيمة الافتراضية : <code>true</code></p>
<p dir="rtl">لإضافة دعم المتصفحات القديمة، انظر إلى <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a>.</p>
<h4><a id="beautifyCSS_272"></a>beautifyCSS</h4>
<p dir="rtl">نوع القيمة : <code>Boolean</code></p>
<p dir="rtl">القيمة الافتراضية : <code>true</code></p>
<p dir="rtl">لتجميل ملف cssالنهائي</p>
<h4><a id="minifyCSS_278"></a>minifyCSS</h4>
<p dir="rtl">نوع القيمة : <code>Boolean</code></p>
<p dir="rtl">القيمة الافتراضية : <code>false</code></p>
<p dir="rtl">لضغط ملف css النهائي</p>
<h2 dir="rtl"><a id="_285"></a>المساهمة</h2>
<p dir="rtl">بإمكانك المساهمة في اي وقت، ارحب بكافة طلبات السحب.</p>
<h2 dir="rtl"><a id="_290"></a>الترخيص</h2>
<p dir="rtl">هذا المشروع يحمل رخصة MIT .</p>
<p dir="rtl">Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
<p dir="rtl">The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
<p dir="rtl">THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
