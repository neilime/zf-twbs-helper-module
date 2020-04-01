# TwbsHelper\View\Helper\Navigation\Navbar  

Helper for rendering navbar

## Implements:
Laminas\EventManager\EventsCapableInterface, Laminas\View\Helper\Navigation\HelperInterface, Laminas\EventManager\EventManagerAwareInterface, Laminas\View\Helper\HelperInterface

## Extend:

Laminas\View\Helper\Navigation\AbstractHelper

## Methods

| Name | Description |
|------|-------------|
|[__invoke](#navbar__invoke)|View helper entry point.|
|[addProperIndentation](#navbaraddproperindentation)||
|[attributesToString](#navbarattributestostring)||
|[getPrefixedClass](#navbargetprefixedclass)||
|[getSizeClass](#navbargetsizeclass)||
|[htmlElement](#navbarhtmlelement)||
|[removeIndentation](#navbarremoveindentation)||
|[renderBrand](#navbarrenderbrand)||
|[renderForm](#navbarrenderform)||
|[renderNav](#navbarrendernav)||
|[renderNavbar](#navbarrendernavbar)|Renders helper.|
|[renderText](#navbarrendertext)||
|[renderToggler](#navbarrendertoggler)||
|[setClassesToAttributes](#navbarsetclassestoattributes)||
|[setStylesToAttributes](#navbarsetstylestoattributes)||

## Inherited methods

| Name | Description |
|------|-------------|
|__call|Magic overload: Proxy calls to the navigation container|
|__toString|Magic overload: Proxy to {@link render()}.|
|accept|Determines whether a page should be accepted when iterating|
|findActive|Finds the deepest active page in the given container|
|getAcl|Returns ACL or null if it isn't set using {@link setAcl()} or
{@link setDefaultAcl()}|
|getClosingBracket|Get the tag closing bracket|
|getContainer|Returns the navigation container helper operates on by default|
|getEventManager|Get the event manager, if present.|
|getIndent|Returns indentation|
|getMaxDepth|Returns maximum depth a page can have to be included when rendering|
|getMinDepth|Returns minimum depth a page must have to be included when rendering|
|getRenderInvisible|Return renderInvisible flag|
|getRole|Returns ACL role to use when iterating pages, or null if it isn't set
using {@link setRole()} or {@link setDefaultRole()}|
|getServiceLocator|Get the service locator.|
|getTranslator|Returns translator used in helper|
|getTranslatorTextDomain|Return the translation text domain|
|getUseAcl|Returns whether ACL should be used|
|getView|Get the view object|
|hasAcl|Checks if the helper has an ACL instance|
|hasContainer|Checks if the helper has a container|
|hasRole|Checks if the helper has an ACL role|
|hasTranslator|Checks if the helper has a translator|
|htmlify|Returns an HTML string containing an 'a' element for the given page|
|isTranslatorEnabled|Returns whether translator is enabled and should be used|
|render|Renders helper|
|setAcl|Sets ACL to use when iterating pages|
|setContainer|Sets navigation container the helper operates on by default|
|setDefaultAcl|Sets default ACL to use if another ACL is not explicitly set|
|setDefaultRole|Sets default ACL role(s) to use when iterating pages if not explicitly
set later with {@link setRole()}|
|setEventManager|Set the event manager.|
|setIndent|Set the indentation string for using in {@link render()}, optionally a
number of spaces to indent with|
|setMaxDepth|Sets the maximum depth a page can have to be included when rendering|
|setMinDepth|Sets the minimum depth a page must have to be included when rendering|
|setRenderInvisible|Render invisible items?|
|setRole|Sets ACL role(s) to use when iterating pages|
|setServiceLocator|Set the service locator.|
|setTranslator|Sets translator to use in helper|
|setTranslatorEnabled|Sets whether translator is enabled and should be used|
|setTranslatorTextDomain|Set translation text domain|
|setUseAcl|Sets whether ACL should be used|
|setView|Set the View object|



### Navbar::__invoke  

**Description**

```php
public __invoke (\Laminas\Navigation\AbstractContainer $oContainer)
```

View helper entry point. 

Retrieves helper and optionally sets container to operate on. 

**Parameters**

* `(\Laminas\Navigation\AbstractContainer) $oContainer`
: [optional] container to operate on  

**Return Values**

`self|string`




<hr />


### Navbar::addProperIndentation  

**Description**

```php
 addProperIndentation (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Navbar::attributesToString  

**Description**

```php
 attributesToString (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Navbar::getPrefixedClass  

**Description**

```php
 getPrefixedClass (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Navbar::getSizeClass  

**Description**

```php
 getSizeClass (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Navbar::htmlElement  

**Description**

```php
 htmlElement (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Navbar::removeIndentation  

**Description**

```php
 removeIndentation (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Navbar::renderBrand  

**Description**

```php
 renderBrand (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Navbar::renderForm  

**Description**

```php
 renderForm (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Navbar::renderNav  

**Description**

```php
 renderNav (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Navbar::renderNavbar  

**Description**

```php
public renderNavbar (\Laminas\Navigation\AbstractContainer $oContainer, array $aOptions)
```

Renders helper. 

Renders a HTML 'ul' for the given $container. If $container is not given,  
the container registered in the helper will be used.  
  
Available $options: 

**Parameters**

* `(\Laminas\Navigation\AbstractContainer) $oContainer`
: [optional] container to create menu from.  
Default is to use the container retrieved from {@link getContainer()}.  
* `(array) $aOptions`
: [optional] options for controlling rendering  

**Return Values**

`string`




<hr />


### Navbar::renderText  

**Description**

```php
 renderText (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Navbar::renderToggler  

**Description**

```php
 renderToggler (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Navbar::setClassesToAttributes  

**Description**

```php
 setClassesToAttributes (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Navbar::setStylesToAttributes  

**Description**

```php
 setStylesToAttributes (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />

