# TwbsHelper\View\Helper\AbstractHtmlElement  



## Implements:
Laminas\View\Helper\HelperInterface, Laminas\I18n\Translator\TranslatorAwareInterface

## Extend:

Laminas\View\Helper\AbstractHtmlElement

## Methods

| Name | Description |
|------|-------------|
|[addProperIndentation](#abstracthtmlelementaddproperindentation)||
|[attributesToString](#abstracthtmlelementattributestostring)||
|[getPrefixedClass](#abstracthtmlelementgetprefixedclass)||
|[getSizeClass](#abstracthtmlelementgetsizeclass)||
|[getTranslator](#abstracthtmlelementgettranslator)|Returns translator used in object|
|[getTranslatorTextDomain](#abstracthtmlelementgettranslatortextdomain)|Return the translation text domain|
|[hasTranslator](#abstracthtmlelementhastranslator)|Checks if the object has a translator|
|[htmlElement](#abstracthtmlelementhtmlelement)||
|[isTranslatorEnabled](#abstracthtmlelementistranslatorenabled)|Returns whether translator is enabled and should be used|
|[removeIndentation](#abstracthtmlelementremoveindentation)||
|[setClassesToAttributes](#abstracthtmlelementsetclassestoattributes)||
|[setStylesToAttributes](#abstracthtmlelementsetstylestoattributes)||
|[setTranslator](#abstracthtmlelementsettranslator)|Sets translator to use in helper|
|[setTranslatorEnabled](#abstracthtmlelementsettranslatorenabled)|Sets whether translator is enabled and should be used|
|[setTranslatorTextDomain](#abstracthtmlelementsettranslatortextdomain)|Set translation text domain|

## Inherited methods

| Name | Description |
|------|-------------|
|getClosingBracket|Get the tag closing bracket|
|getView|Get the view object|
|setView|Set the View object|



### AbstractHtmlElement::addProperIndentation  

**Description**

```php
 addProperIndentation (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### AbstractHtmlElement::attributesToString  

**Description**

```php
 attributesToString (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### AbstractHtmlElement::getPrefixedClass  

**Description**

```php
 getPrefixedClass (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### AbstractHtmlElement::getSizeClass  

**Description**

```php
 getSizeClass (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### AbstractHtmlElement::getTranslator  

**Description**

```php
public getTranslator (void)
```

Returns translator used in object 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`\TranslatorInterface|null`




<hr />


### AbstractHtmlElement::getTranslatorTextDomain  

**Description**

```php
public getTranslatorTextDomain (void)
```

Return the translation text domain 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`string`




<hr />


### AbstractHtmlElement::hasTranslator  

**Description**

```php
public hasTranslator (void)
```

Checks if the object has a translator 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`bool`




<hr />


### AbstractHtmlElement::htmlElement  

**Description**

```php
 htmlElement (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### AbstractHtmlElement::isTranslatorEnabled  

**Description**

```php
public isTranslatorEnabled (void)
```

Returns whether translator is enabled and should be used 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`bool`




<hr />


### AbstractHtmlElement::removeIndentation  

**Description**

```php
 removeIndentation (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### AbstractHtmlElement::setClassesToAttributes  

**Description**

```php
 setClassesToAttributes (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### AbstractHtmlElement::setStylesToAttributes  

**Description**

```php
 setStylesToAttributes (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### AbstractHtmlElement::setTranslator  

**Description**

```php
public setTranslator (\TranslatorInterface|null $translator, string|null $textDomain)
```

Sets translator to use in helper 

 

**Parameters**

* `(\TranslatorInterface|null) $translator`
* `(string|null) $textDomain`

**Return Values**

`$this`




<hr />


### AbstractHtmlElement::setTranslatorEnabled  

**Description**

```php
public setTranslatorEnabled (bool $enabled)
```

Sets whether translator is enabled and should be used 

 

**Parameters**

* `(bool) $enabled`

**Return Values**

`$this`




<hr />


### AbstractHtmlElement::setTranslatorTextDomain  

**Description**

```php
public setTranslatorTextDomain (string $textDomain)
```

Set translation text domain 

 

**Parameters**

* `(string) $textDomain`

**Return Values**

`$this`




<hr />

