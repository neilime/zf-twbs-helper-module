# TwbsHelper\View\Helper\ButtonGroup  

ButtonGroup

## Implements:
Laminas\I18n\Translator\TranslatorAwareInterface, Laminas\View\Helper\HelperInterface

## Extend:

TwbsHelper\View\Helper\AbstractHtmlElement

## Methods

| Name | Description |
|------|-------------|
|[__invoke](#buttongroup__invoke)||
|[getButtonGroupOptions](#buttongroupgetbuttongroupoptions)|Return valid button group settings or null|
|[getFormElementHelper](#buttongroupgetformelementhelper)||
|[render](#buttongrouprender)|Render button groups markup|

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



### ButtonGroup::__invoke  

**Description**

```php
 __invoke (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### ButtonGroup::getButtonGroupOptions  

**Description**

```php
public getButtonGroupOptions (array $options)
```

Return valid button group settings or null 

 

**Parameters**

* `(array) $options`

**Return Values**

`array|null`




<hr />


### ButtonGroup::getFormElementHelper  

**Description**

```php
 getFormElementHelper (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### ButtonGroup::render  

**Description**

```php
public render (array $aButtons, array $aButtonGroupOptions)
```

Render button groups markup 

 

**Parameters**

* `(array) $aButtons`
* `(array) $aButtonGroupOptions`

**Return Values**

`string`




**Throws Exceptions**


`\LogicException`


<hr />

