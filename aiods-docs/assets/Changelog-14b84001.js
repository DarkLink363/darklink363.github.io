import{j as n}from"./jsx-runtime-ffb262ed.js";import"./chunk-S4VUQJ4A-0dc10523.js";import{M as s,e as p}from"./index-57046ee4.js";import{u as t}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-7859f9bc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-b67253cd.js";import"./index-356e4a49.js";const d=`## **3.0.33 (Sierpień 17, 2022)**

<br>

### **Changes**

* **Superuser:** cofanie zmian Vite`,c=`## **3.0.20 (Sierpień 15, 2022)**

<br>

### **Bug Fixes**

* **IoActionShow** dodano sprawdzanie czy wartość wiersza tabeli istnieje i nie jest puste (\`row.value\`)
* **IoActionEdit** dodano sprawdzanie czy wartość wiersza tabeli istnieje i nie jest puste (\`row.value\`)
* **IoActionDelete** dodano sprawdzanie czy wartość wiersza tabeli istnieje i nie jest puste (\`row.value\`)`,l="## **3.0.19 (Sierpień 15, 2022)**\n\n<br>\n\n### **Bug Fixes**\n\n* **IoActionShow** jeżeli komponent nie ma podanego props `id` ani nie można wyciągnąć go z `row.value.id` (wartości wiersza tabeli), wysyłane jest `undefined`\n* **IoActionEdit** jeżeli komponent nie ma podanego props `id` ani nie można wyciągnąć go z `row.value.id` (wartości wiersza tabeli), wysyłane jest `undefined`\n* **IoActionDelete** jeżeli komponent nie ma podanego props `id` ani nie można wyciągnąć go z `row.value.id` (wartości wiersza tabeli), wysyłane jest `undefined`",_=`## **3.0.18 (Sierpień 15, 2022)**

<br>

### **Features**

* **IoActionShow:** Komponent posiada nowy prop \`nested\`, który przekazywany jest do jego zapytania
* **IoActionEdit:** Komponent posiada nowy prop \`nested\`, który przekazywany jest do jego zapytania
* **IoActionDelete:** Komponent posiada nowy prop \`nested\`, który przekazywany jest do jego zapytania
`,u=`## **3.0.17 (Sierpień 15, 2022)**

<br>

### **Changes**

* **CSS:** klasa \`inbox__item\` nie posiada teraz \`cursor-pointer\``,m=`## **3.0.16 (Sierpień 15, 2022)**

<br>

### **Changes**

* **CSS:** klasa \`inbox__item\` jest teraz globalna`,w=`## **3.0.15 (Sierpień 15, 2022)**

<br>

### **Features**

* **IoSideTab:** Dodano slot \`header\``,g=`## **3.0.14 (Sierpień 15, 2022)**

<br>

### **Bug Fixes**

* **CRUD Service** Naprawiono bug z używaniem opcji \`select\``,z=`## **3.0.13 (Sierpień 14, 2022)**

<br>

### **Features**

* **CRUD Service:** Dodano możliwość ustawiania \`select\` dla injectService poprzez opcje
`,y=`## **3.0.12 (Sierpień 14, 2022)**

<br>

### **Features**

* **Database:** Dodano tabelę powiadomień
`,h=`## **3.0.11 (Sierpień 9, 2022)**

<br>

### **Bug Fixes**

* **IoMultiSelect:** Naprawiono problem z case-sensitive w wyszukiwaniu
* **IoMultiSelect:** Naprawiono problem z z-index

`,b=`## **3.0.10 (Sierpień 9, 2022)**

<br>

### **Features**

* **IoDatePicker:** Dodano nowy komponent Vue do wybierania daty

#### **Mniej ważne**

* **Lang:** Poprawiono teksty
`,j="## **3.0.9 (Sierpień 5, 2022)**\n\n<br>\n\n### **Changes**\n\n* **Request Content-Type to JSON:** Zmieniono nazwę middleware z `aiods.ct_to_json` na `aiods.wants_json`\n* **Request Content-Type to JSON:** Dodano do middleware `aiods.wants_json` wymuszanie nagłówka `Accept` na `application/json`\n",k="## **3.0.8 (Sierpień 5, 2022)**\n\n<br>\n\n### **Changes**\n\n* **Request Content-Type to JSON:** Dodano do middleware `aiods.ct_to_json` wymuszanie nagłówka `X-Requested-With` na `XMLHttpRequest`",S=`## **3.0.7 (Sierpień 5, 2022)**

<br>

### **Features**

* **Request Content-Type to JSON:** Dodano nowy middleware \`aiods.ct_to_json\`, który wymusza aby header przychodzący był \`application/json\`
`,x=`## **3.0.6 (Sierpień 2, 2022)**

<br>

### **Changes**

* **Response XML:** Zmieniono namespace z \`Support\` na \`Http\`
`,f=`## **3.0.5 (Sierpień 2, 2022)**

<br>

### **Changes**

* **Response XML:** Domyślne ustawienia response xml są teraz ustawiane w \`config/aiods.php\`

#### **Mało ważne**

* **Response XML:** Dodano nazwy parametrów przy wywoływaniu funkcji - czytelność kodu
`,v=`## **3.0.4 (Sierpień 2, 2022)**

<br>

### **Features**

* **Response XML:** Dodano możliwość zwracania XML jako response \`response()->xml($data, $status, $headers, $options)\`
`,C=`## **3.0.3 (Sierpień 2, 2022)**

<br>

### **Changes**

* **Wewnętrzne:** Rejestracja modułu odbywa się teraz poprzez Manager modułów
`,M=`## **3.0.2 (Sierpień 2, 2022)**

<br>

#### **Mało ważne**

* **Wewnętrzne:** drobna poprawka stylistyczna
`,D=`## **3.0.1 (Sierpień 2, 2022)**

<br>

### **Features**

* Dodano ładowanie route z modułów

### **Changes**

* **Model Application:** Added relations return type
* **Model AccessToken:** Added relations return type
`,F="## **3.0.0 (Sierpień 1, 2022)**\n\n<br/>\n\n### **Features**\n\n* **Vue 3:** Vue 3 witamy na pokładzie 😄\n* **Inertia** Wraz z vue 3 mostek pomiędzy vue 3, a Laravel'em (Aiods'em) pełni teraz Inertia\n* **Services:** Dodanie nowego typu klasy `Service`, która eliminuje problem zduplikowanego kodu pomiędzy zwykłym kontrolerem, a kontrolerem do API\n* **Fast paginate:** Nowa oraz szybsza metoda paginacji `->fastPaginate()`\n* **Bramki:** Od teraz bramki automatycznie ładowane są do Laravel'a, dzięki czemu można korzystać z funkcji pomocniczych Laravel'a takich jak np. `auth()->user()->can()`\n* **Facade Menu:** Nowy facade `Menu`\n* **Facade Modules:** Nowy facade `Modules`\n* **Facade Translations:** Nowy facade `Translations`\n* **Cast:** Nowy cast `FloatedIntegerCast` pozwala na pokazywanie na froncie zmiennej typu float, natomiast w bazie danych informacja jest przetrzymywana jako integer (bigint)\n\n#### **Mniej ważne**\n\n* **not_null($value):** Nowy helper `not_null` - sprawdza czy dana zmienna nie jest null\n* **vendor_aiods_path():** Nowy helper `vendor_aiods_path`\n* **bootstrap_cache_path():** Nowy helper `bootstrap_cache_path`\n* **vendor_mix():** Nowy helper `vendor_mix`\n* **user():** Nowy helper `user`, zwraca klasę (string) modelu `User`\n* **migracja users:** Możliwość opublikowania do projektu tabeli users poprzez komendę `vendor:publish --tag=migration:user`\n\n### **Changes**\n\n* **Webpack:** Oddzielono oraz zmieniono całkowicie budowanie JS w tym CSS\n* **Webpack:** Vendor js Aiods nie jest już publikowany do resources/vendor/...\n* **memory_cache():** Usprawniony helper `memory_cache`\n* **routy admina:** Przeniesiono routy admina do pliku `routes/admin.php`\n* **routy blade/web:** Przeniesiono routy blade/web z pliku `routes/blade.php` do pliku `routes/web.php`\n* **routy api:** Przeniesiono routy api z pliku `routes/apiV2.php` do pliku `routes/api.php`\n* **model User:** Przeniesiono model `User` z vendora do plików do edycji\n* **Bramki:** Zmieniono nazwę modelu z Gate na `Permission`\n* **Tokeny API:** Zmieniono obsługę tokenów użytkowników z customowej na `sanctum`, przyczym tokeny aplikacji pozostają bez zmian i są obsługiwane przez Aiods'a\n\n\n### **Bug Fixes**\n\n\n### **Deprecated**\n\n* **crud helper:** usunięto funkcję pomocniczą `crud()`, zamiast tego należy korzystać z funkcji Laravel'owych `Route::resource()` oraz `Route::apiResource()`\n* **komenda aiods:module:build** Usuniętą komendę `aiods:module:build`",A=Object.freeze(Object.defineProperty({__proto__:null,changelog_3_0_0:F,changelog_3_0_1:D,changelog_3_0_10:b,changelog_3_0_11:h,changelog_3_0_12:y,changelog_3_0_13:z,changelog_3_0_14:g,changelog_3_0_15:w,changelog_3_0_16:m,changelog_3_0_17:u,changelog_3_0_18:_,changelog_3_0_19:l,changelog_3_0_2:M,changelog_3_0_20:c,changelog_3_0_3:C,changelog_3_0_33:d,changelog_3_0_4:v,changelog_3_0_5:f,changelog_3_0_6:x,changelog_3_0_7:S,changelog_3_0_8:k,changelog_3_0_9:j},Symbol.toStringTag,{value:"Module"}));function i(e){const o=Object.assign({h1:"h1"},t(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Changelog"}),`
`,n.jsx("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,n.jsx(o.h1,{id:"changelog",children:"Changelog"}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,Object.entries(A).sort((a,r)=>r[0].localeCompare(a[0],"pl",{numeric:!0})).map(a=>n.jsx(p,{children:a[1]+"<br/><br/>"}))]})}function W(e={}){const{wrapper:o}=Object.assign({},t(),e.components);return o?n.jsx(o,Object.assign({},e,{children:n.jsx(i,e)})):i(e)}export{W as default};
//# sourceMappingURL=Changelog-14b84001.js.map
