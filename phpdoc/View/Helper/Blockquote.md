# TwbsHelper\View\Helper\Blockquote  

Helper for rendering blockquotes

## Implements:
Laminas\I18n\Translator\TranslatorAwareInterface, Laminas\View\Helper\HelperInterface

## Extend:

TwbsHelper\View\Helper\AbstractHtmlElement

## Methods

| Name | Description |
|------|-------------|
|[__invoke](#blockquote__invoke)|Generates a 'blockquote' element|

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



### Blockquote::__invoke  

**Description**

```php
public __invoke (string $sContent, string $sFooter, array $aAttributes, array $aContentAttributes, array $aFooterAttributes, bool $bEscape)
```

Generates a 'blockquote' element 

 

**Parameters**

* `(string) $sContent`
: The content of the blockquote  
* `(string) $sFooter`
: The content of the footer of the blockquote. Default : empty  
* `(array) $aAttributes`
: Html attributes of the "<blockquote>" element. Default : empty  
* `(array) $aContentAttributes`
: Html attributes of the "<p>" (content) element. Default : empty  
* `(array) $aFooterAttributes`
: Html attributes of the "<footer>" (footer) element. Default : empty  
* `(bool) $bEscape`
: True espace html content '$sContent'. Default True  

**Return Values**

`string`

> The blockquote XHTML.


<hr />

