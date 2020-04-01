# TwbsHelper\View\Helper\Table  

Helper for rendering tables

## Implements:
Laminas\I18n\Translator\TranslatorAwareInterface, Laminas\View\Helper\HelperInterface

## Extend:

TwbsHelper\View\Helper\AbstractHtmlElement

## Methods

| Name | Description |
|------|-------------|
|[__invoke](#table__invoke)|Generates a 'table' element|
|[renderHeadRows](#tablerenderheadrows)|Generate table "<thead>" rows elements|
|[renderTableCell](#tablerendertablecell)|Generate table cell element "<th>" or "<td>"|
|[renderTableRow](#tablerendertablerow)|Generate table row element "<tr>"|
|[renderTableRows](#tablerendertablerows)|Generate table rows elements|

## Inherited methods

| Name | Description |
|------|-------------|
| [addProperIndentation](https://secure.php.net/manual/en/twbshelper\view\helper\abstracthtmlelement.addproperindentation.php) | - |
| [attributesToString](https://secure.php.net/manual/en/twbshelper\view\helper\abstracthtmlelement.attributestostring.php) | - |
|getClosingBracket|Get the tag closing bracket|
| [getPrefixedClass](https://secure.php.net/manual/en/twbshelper\view\helper\abstracthtmlelement.getprefixedclass.php) | - |
| [getSizeClass](https://secure.php.net/manual/en/twbshelper\view\helper\abstracthtmlelement.getsizeclass.php) | - |
|getTranslator|Returns translator used in object|
|getTranslatorTextDomain|Return the translation text domain|
|getView|Get the view object|
|hasTranslator|Checks if the object has a translator|
| [htmlElement](https://secure.php.net/manual/en/twbshelper\view\helper\abstracthtmlelement.htmlelement.php) | - |
|isTranslatorEnabled|Returns whether translator is enabled and should be used|
| [removeIndentation](https://secure.php.net/manual/en/twbshelper\view\helper\abstracthtmlelement.removeindentation.php) | - |
| [setClassesToAttributes](https://secure.php.net/manual/en/twbshelper\view\helper\abstracthtmlelement.setclassestoattributes.php) | - |
| [setStylesToAttributes](https://secure.php.net/manual/en/twbshelper\view\helper\abstracthtmlelement.setstylestoattributes.php) | - |
|setTranslator|Sets translator to use in helper|
|setTranslatorEnabled|Sets whether translator is enabled and should be used|
|setTranslatorTextDomain|Set translation text domain|
|setView|Set the View object|



### Table::__invoke  

**Description**

```php
public __invoke (array $aRows, array $aAttributes, bool $bEscape)
```

Generates a 'table' element 

 

**Parameters**

* `(array) $aRows`
: table rows  
* `(array) $aAttributes`
: html attributes of the "<table>" element.  
Default : empty  
* `(bool) $bEscape`
: true espace html content of cells. Default True  

**Return Values**

`string`

> The table XHTML.


**Throws Exceptions**


`\InvalidArgumentException`


<hr />


### Table::renderHeadRows  

**Description**

```php
public renderHeadRows (array $aHeadRows, bool $bEscape)
```

Generate table "<thead>" rows elements 

 

**Parameters**

* `(array) $aHeadRows`
* `(bool) $bEscape`
: true espace html content of cells. Default True  

**Return Values**

`string`

> The "<thead>" rows XHTML.


**Throws Exceptions**


`\InvalidArgumentException`


<hr />


### Table::renderTableCell  

**Description**

```php
public renderTableCell (int|float|string|bool|array $sCell, string $sDefaultCellType, bool $bEscape)
```

Generate table cell element "<th>" or "<td>" 

 

**Parameters**

* `(int|float|string|bool|array) $sCell`
: the cell data  
* `(string) $sDefaultCellType`
: the default cell element  
(th or td) to be used  
* `(bool) $bEscape`
: true espace html content of cells. Default True  

**Return Values**

`string`

> The cell XHTML.


**Throws Exceptions**


`\InvalidArgumentException`


<hr />


### Table::renderTableRow  

**Description**

```php
public renderTableRow (array $aRow, string $sDefaultCellType, bool $bEscape)
```

Generate table row element "<tr>" 

 

**Parameters**

* `(array) $aRow`
: the array of cells.  
* `(string) $sDefaultCellType`
: the default cell element  
(th or td) to be used  
* `(bool) $bEscape`
: true espace html content of cells. Default True  

**Return Values**

`string`

> The row XHTML.


<hr />


### Table::renderTableRows  

**Description**

```php
public renderTableRows (array $aRows, bool $bEscape)
```

Generate table rows elements 

 

**Parameters**

* `(array) $aRows`
: the array of rows.  
* `(bool) $bEscape`
: true espace html content of cells. Default True  

**Return Values**

`string`

> The rows XHTML.


**Throws Exceptions**


`\InvalidArgumentException`


<hr />

