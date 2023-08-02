import{j as e}from"./jsx-runtime-ffb262ed.js";import"./chunk-S4VUQJ4A-acfb31cd.js";import{M as s}from"./index-2247b6c8.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ff3e4824.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-b67253cd.js";import"./index-356e4a49.js";function i(r){const n=Object.assign({h1:"h1",p:"p",h4:"h4",a:"a",h5:"h5",h2:"h2",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",h3:"h3",em:"em"},a(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Crud/Service"}),`
`,e.jsx(n.h1,{id:"crud---service",children:"Crud - Service"}),`
`,e.jsx(n.p,{children:`Service - główny element łączący np. kontroler z modelem,
odpowiada za akcje wykonywane na modelu.`}),`
`,e.jsx(n.h4,{id:"-przykładowy-service-użytkowników",children:e.jsx(n.a,{href:"#-przyk%C5%82adowy-service-u%C5%BCytkownik%C3%B3w",children:"# Przykładowy Service użytkowników"})}),`
`,e.jsxs(n.h5,{id:"-definiowanie-modelu",children:[" ",e.jsx(n.a,{href:"#-definiowane-modelu",children:"# Definiowanie modelu"})]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"-przykładowy-najprostrzy-service-użytkowników",children:"# Przykładowy najprostrzy Service użytkowników"}),`
`,e.jsx(n.p,{children:"Zawiera on wszystkie podstawowe funckje, takie jak:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"index"})," - zwraca wszystkie rekordy"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"show"})," - zwraca jeden rekord"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"store"})," - dodaje rekord do bazy danych"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"update"})," - aktualizuje rekord w bazie danych"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"destroy"})," - pobiera, a następnie usuwa rekord z bazy danych"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"destroyDirect"})," - usuwa rekord z bazy danych"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`<?php

namespace App\\Services;

use Aiods\\Support\\Crud\\Service;
use App\\Models\\User;

class UserService extends Service
{
    protected string $model = User::class;
}
`})}),`
`,e.jsx(n.h2,{id:"-definiowane-modelu",children:"# Definiowane modelu"}),`
`,e.jsxs(n.p,{children:["Każdy Service ",e.jsx(n.strong,{children:"wymaga"})," podania klasy modelu do którego ma się odwoływać"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`  protected string $model = User::class;
`})}),`
`,e.jsxs(n.p,{children:["Jeżeli potrzebujemy pobierać model na podstawie jakiś zmiennych lub funkcji, trzeba nadpisać funkcję ",e.jsx(n.code,{children:"getModel"})," i zwracać z niej klasę"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`/**
 * @return string|Model
 */
public function getModel(): string|Model
{
    return User::class;
}
`})}),`
`,e.jsx(n.h2,{id:"-sortowanie",children:"# Sortowanie"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"-sortowanie-domyślne",children:"# Sortowanie domyślne"}),`
`,e.jsxs(n.p,{children:["sortowanie domyślne ustawiamy poprzez ustawienie zmiennej ",e.jsx(n.code,{children:"$sortBy"})," w formie:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"pierwszy element tablicy:"})," kolumna po której wyniki mają być sortowane,"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"drugi element tablicy:"})," kierunek sortowania ",e.jsx(n.code,{children:"asc"})," lub ",e.jsx(n.code,{children:"desc"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`protected ?array $sortBy = [
    'created_at',
    'desc'
];
`})}),`
`,e.jsx(n.h3,{id:"-sortowanie-z-zapytania",children:"# Sortowanie z zapytania"}),`
`,e.jsx(n.h2,{id:"-wyszukiwanie",children:"# Wyszukiwanie"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"-wyszukiwanie---definiowanie-kolumn",children:"# Wyszukiwanie - definiowanie kolumn"}),`
`,e.jsxs(n.p,{children:["W celu umożliwienia wyszukiwania po danych kolumnach należy je zdefiniować, w tym celu do Service dodajemy zmienną ",e.jsx(n.code,{children:"$searchIn"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`protected array $searchIn = [
    'first_name',
    'last_name',
    'email',
    'phone',
];
`})}),`
`,e.jsx(n.h3,{id:"-wyszukiwanie-po-kolumnach-łaczonych",children:"# Wyszukiwanie po kolumnach łaczonych"}),`
`,e.jsxs(n.p,{children:["Kolumny łączone to na przykład, jeżeli w bazie posiadamy osobne kolumny do imienia (",e.jsx(n.code,{children:"first_name"}),") oraz do nazwiska (",e.jsx(n.code,{children:"last_name"}),`),
natomiast chcemy mieć możliwość szukania osobno jak i razem w obydwóch kolumnach,
w tym celu musimy połączyć odpowiedzi z dwóch kolumn znakiem `,e.jsx(n.code,{children:"+"})," i spacją pomiędzy (",e.jsx(n.code,{children:"' '"}),")."]}),`
`,e.jsxs(n.p,{children:["Możemy tworzyć kilka kombinacji tych samych pól jak np. ",e.jsx(n.code,{children:`"first_name+' '+last_name"`})," oraz ",e.jsx(n.code,{children:`"last_name+' '+first_name"`})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`protected array $searchIn = [
    'first_name',
    'last_name',
    "first_name+' '+last_name",
    "last_name+' '+first_name"
];
`})}),`
`,e.jsxs(n.p,{children:["Istnieje również możliwość nadpisania funkcji ",e.jsx(n.code,{children:"getSearchIn"})," w celu dodania zapytań ",e.jsx(n.em,{children:"RAW"}),", np."]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["przykład używania CONCAT - to samo co ",e.jsx(n.code,{children:"+"})]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`protected function getSearchIn(): array
{
    return [
        'first_name',
        'last_name',
        'email',
        'phone',
        DB::raw("CONCAT(first_name,' ',last_name)")
    ];
}
`})}),`
`,e.jsx(n.h2,{id:"-relacje",children:"# Relacje"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"-relacje-proste",children:"# Relacje proste"}),`
`,e.jsxs(n.p,{children:["Dodawanie relacji do poszczególnych zapytań odbywa się poprzed dodanie i uzupełnienie w zależności od potrzeb zmiennej ",e.jsx(n.code,{children:"$relations"})," jak na przykładzie poniżej."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`protected array $relations = [
    'index' => ['role'],
    'show' => ['role'],
    'store' => [],
    'update' => [],
    'destroy' => [],
];
`})}),`
`,e.jsx(n.p,{children:"Oczywiście nie są wymagane wszystkie pozycje w tablicy, powyższy przykład można zapisać krócej:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`protected array $relations = [
    'index' => ['role'],
    'show' => ['role'],
];
`})}),`
`,e.jsx(n.h3,{id:"-relacje-złożone",children:"# Relacje złożone"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`/**
 * @return array|array[]
 */
public function getRelations(): array
{
    return [
        'index' => [
            'tasks',
        ],
        'show' => [
            'tasks' => fn ($q) => $q->orderBy('name')
        ],
    ];
}
`})}),`
`,e.jsx(n.h2,{id:"-rozszerzanie-service",children:"# Rozszerzanie Service"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"-tworzenie-funkcji-na-podstawie-crudowych",children:"# Tworzenie funkcji na podstawie CRUDowych"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`/**
 * @throws Throwable
 */
public function userScoped($userId = null): \\Illuminate\\Database\\Eloquent\\Collection|array
{
    return parent::index(new Callback(fn ($q) => $q->of($userId ?? (auth()->check() ? auth()->user()->id : null) )));
}
`})}),`
`,e.jsxs(n.p,{children:["Odpowiednia klasa ",e.jsx(n.code,{children:"Callback"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`use Aiods\\Support\\Callback;
`})}),`
`,e.jsx(n.h3,{id:"-tworzenie-funkcji",children:"# Tworzenie funkcji"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`public static function storeScoped(LeadStoreApiRequest $request)
{
    $defaultStatus = Status::query()->where('is_default', 1)->first();
    return Task::query()->updateOrCreate([
        'id' => $request->input('id'),
        'user_id' => auth()->user()->id,
        'status' => optional($defaultStatus)->status ?? 'Nowy',
    ], $request->validated());
}
`})}),`
`,e.jsx(n.h2,{id:"-funkcje-pomocnicze",children:"# Funkcje pomocnicze"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`protected function indexBuilder(Builder $builder): Builder { return $builder; }
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`protected function showBuilder(Builder $builder): Builder { return $builder; }
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`protected function storeBuilder(Builder $builder): Builder { return $builder; }
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`protected function updateBuilder(Builder $builder): Builder { return $builder; }
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`protected function destroyBuilder(Builder $builder): Builder { return $builder; }
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`protected function getSelectOf($name)
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`public function query(): Builder
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`public function getRelationsOf($type): array
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`public function setModel(string $model): void
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-php",children:`public function setSortBy(?array $sortBy): void
`})})]})}function w(r={}){const{wrapper:n}=Object.assign({},a(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(i,r)})):i(r)}export{w as default};
//# sourceMappingURL=Service-cad2f215.js.map
