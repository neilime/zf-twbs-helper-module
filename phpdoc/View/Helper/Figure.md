# TwbsHelper\View\Helper\Figure  

Helper for rendering figures

## Implements:
Laminas\I18n\Translator\TranslatorAwareInterface, Laminas\View\Helper\HelperInterface

## Extend:

TwbsHelper\View\Helper\AbstractHtmlElement

## Methods

| Name | Description |
|------|-------------|
|[__invoke](#figure__invoke)|Generates a 'figure' element|

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



### Figure::__invoke  

**Description**

```php
public __invoke (string $sImageSrc, string $sCaption, array $aAttributes, array $aImageOptionsAndAttributes, array $aCaptionAttributes, bool $bEscape)
```

Generates a 'figure' element 

 

**Parameters**

* `(string) $sImageSrc`
: The path to the image of the figure  
* `(string) $sCaption`
: The content of the caption of the figure. Default : empty  
* `(array) $aAttributes`
: Html attributes of the "<figure>" element. Default : empty  
* `(array) $aImageOptionsAndAttributes`
: \TwbsHelper\View\Helper\Image options and attributes. Default : empty  
* `(array) $aCaptionAttributes`
: Html attributes of the "<figcaption>" (caption) element. Default : empty  
* `(bool) $bEscape`
: True espace html caption '$sCaption'. Default True  

**Return Values**

`string`

> The figure XHTML.


**Throws Exceptions**


`\InvalidArgumentException`


<hr />

