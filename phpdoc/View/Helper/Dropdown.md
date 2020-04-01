# TwbsHelper\View\Helper\Dropdown  



## Implements:
Laminas\I18n\Translator\TranslatorAwareInterface, Laminas\View\Helper\HelperInterface

## Extend:

TwbsHelper\View\Helper\AbstractHtmlElement

## Methods

| Name | Description |
|------|-------------|
|[__invoke](#dropdown__invoke)||
|[render](#dropdownrender)|Render dropdown markup|
|[renderMenu](#dropdownrendermenu)|Render dropdown menu markup|
|[renderMenuFromElement](#dropdownrendermenufromelement)||
|[renderToggle](#dropdownrendertoggle)|Render dropdown toggle markup|

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



### Dropdown::__invoke  

**Description**

```php
 __invoke (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Dropdown::render  

**Description**

```php
public render (\Laminas\Form\ElementInterface|array $oDropdown)
```

Render dropdown markup 

 

**Parameters**

* `(\Laminas\Form\ElementInterface|array) $oDropdown`

**Return Values**

`string`




<hr />


### Dropdown::renderMenu  

**Description**

```php
public renderMenu (array $aDropdownOptions)
```

Render dropdown menu markup 

 

**Parameters**

* `(array) $aDropdownOptions`

**Return Values**

`string`




**Throws Exceptions**


`\InvalidArgumentException`


<hr />


### Dropdown::renderMenuFromElement  

**Description**

```php
 renderMenuFromElement (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Dropdown::renderToggle  

**Description**

```php
public renderToggle (array $aDropdownOptions)
```

Render dropdown toggle markup 

 

**Parameters**

* `(array) $aDropdownOptions`

**Return Values**

`string`




**Throws Exceptions**


`\InvalidArgumentException`


<hr />

