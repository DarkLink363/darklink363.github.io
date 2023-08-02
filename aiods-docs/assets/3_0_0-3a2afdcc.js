import{j as e}from"./jsx-runtime-ffb262ed.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function i(s){const n=Object.assign({h2:"h2",strong:"strong",h3:"h3",ul:"ul",li:"li",code:"code",h4:"h4"},r(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"300-sierpień-1-2022",children:e.jsx(n.strong,{children:"3.0.0 (Sierpień 1, 2022)"})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"features",children:e.jsx(n.strong,{children:"Features"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vue 3:"})," Vue 3 witamy na pokładzie 😄"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inertia"})," Wraz z vue 3 mostek pomiędzy vue 3, a Laravel'em (Aiods'em) pełni teraz Inertia"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Services:"})," Dodanie nowego typu klasy ",e.jsx(n.code,{children:"Service"}),", która eliminuje problem zduplikowanego kodu pomiędzy zwykłym kontrolerem, a kontrolerem do API"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fast paginate:"})," Nowa oraz szybsza metoda paginacji ",e.jsx(n.code,{children:"->fastPaginate()"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bramki:"})," Od teraz bramki automatycznie ładowane są do Laravel'a, dzięki czemu można korzystać z funkcji pomocniczych Laravel'a takich jak np. ",e.jsx(n.code,{children:"auth()->user()->can()"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Facade Menu:"})," Nowy facade ",e.jsx(n.code,{children:"Menu"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Facade Modules:"})," Nowy facade ",e.jsx(n.code,{children:"Modules"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Facade Translations:"})," Nowy facade ",e.jsx(n.code,{children:"Translations"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cast:"})," Nowy cast ",e.jsx(n.code,{children:"FloatedIntegerCast"})," pozwala na pokazywanie na froncie zmiennej typu float, natomiast w bazie danych informacja jest przetrzymywana jako integer (bigint)"]}),`
`]}),`
`,e.jsx(n.h4,{id:"mniej-ważne",children:e.jsx(n.strong,{children:"Mniej ważne"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"not_null($value):"})," Nowy helper ",e.jsx(n.code,{children:"not_null"})," - sprawdza czy dana zmienna nie jest null"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"vendor_aiods_path():"})," Nowy helper ",e.jsx(n.code,{children:"vendor_aiods_path"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"bootstrap_cache_path():"})," Nowy helper ",e.jsx(n.code,{children:"bootstrap_cache_path"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"vendor_mix():"})," Nowy helper ",e.jsx(n.code,{children:"vendor_mix"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"user():"})," Nowy helper ",e.jsx(n.code,{children:"user"}),", zwraca klasę (string) modelu ",e.jsx(n.code,{children:"User"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"migracja users:"})," Możliwość opublikowania do projektu tabeli users poprzez komendę ",e.jsx(n.code,{children:"vendor:publish --tag=migration:user"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"changes",children:e.jsx(n.strong,{children:"Changes"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Webpack:"})," Oddzielono oraz zmieniono całkowicie budowanie JS w tym CSS"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Webpack:"})," Vendor js Aiods nie jest już publikowany do resources/vendor/..."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"memory_cache():"})," Usprawniony helper ",e.jsx(n.code,{children:"memory_cache"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"routy admina:"})," Przeniesiono routy admina do pliku ",e.jsx(n.code,{children:"routes/admin.php"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"routy blade/web:"})," Przeniesiono routy blade/web z pliku ",e.jsx(n.code,{children:"routes/blade.php"})," do pliku ",e.jsx(n.code,{children:"routes/web.php"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"routy api:"})," Przeniesiono routy api z pliku ",e.jsx(n.code,{children:"routes/apiV2.php"})," do pliku ",e.jsx(n.code,{children:"routes/api.php"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"model User:"})," Przeniesiono model ",e.jsx(n.code,{children:"User"})," z vendora do plików do edycji"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bramki:"})," Zmieniono nazwę modelu z Gate na ",e.jsx(n.code,{children:"Permission"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tokeny API:"})," Zmieniono obsługę tokenów użytkowników z customowej na ",e.jsx(n.code,{children:"sanctum"}),", przyczym tokeny aplikacji pozostają bez zmian i są obsługiwane przez Aiods'a"]}),`
`]}),`
`,e.jsx(n.h3,{id:"bug-fixes",children:e.jsx(n.strong,{children:"Bug Fixes"})}),`
`,e.jsx(n.h3,{id:"deprecated",children:e.jsx(n.strong,{children:"Deprecated"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"crud helper:"})," usunięto funkcję pomocniczą ",e.jsx(n.code,{children:"crud()"}),", zamiast tego należy korzystać z funkcji Laravel'owych ",e.jsx(n.code,{children:"Route::resource()"})," oraz ",e.jsx(n.code,{children:"Route::apiResource()"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"komenda aiods:module:build"})," Usuniętą komendę ",e.jsx(n.code,{children:"aiods:module:build"})]}),`
`]})]})}function a(s={}){const{wrapper:n}=Object.assign({},r(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(i,s)})):i(s)}export{a as default};
//# sourceMappingURL=3_0_0-3a2afdcc.js.map
