# TwbsHelper\View\Helper\Image  

Helper for rendering images

## Implements:
Laminas\I18n\Translator\TranslatorAwareInterface, Laminas\View\Helper\HelperInterface

## Extend:

TwbsHelper\View\Helper\AbstractHtmlElement

## Methods

| Name | Description |
|------|-------------|
|[__invoke](#image__invoke)|Generates a 'image' element|
|[renderSources](#imagerendersources)||

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



### Image::__invoke  

**Description**

```php
public __invoke (string $sImageSrc, array $aOptions, array $aAttributes)
```

Generates a 'image' element 

 

**Parameters**

* `(string) $sImageSrc`
: The path to the image  
* `(array) $aOptions`
: Image options. Default : empty. Allowed options:  
- boolean fluid: responsive image  
- boolean thumbnail: thumbnail image  
- boolean rounded: rounded image  
- boolean figure: figure image  
- [srcset => type] sources: list of sources for <picture element>  
* `(array) $aAttributes`
: Html attributes of the "<img>" element. Default : empty  

**Return Values**

`string`

> The image XHTML.


**Throws Exceptions**


`\InvalidArgumentException`


<hr />


### Image::renderSources  

**Description**

```php
 renderSources (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />

