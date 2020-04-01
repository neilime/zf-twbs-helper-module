# TwbsHelper\View\Helper\Navigation\Menu  

Helper for rendering abbreviations

## Implements:
Laminas\View\Helper\HelperInterface, Laminas\EventManager\EventManagerAwareInterface, Laminas\View\Helper\Navigation\HelperInterface, Laminas\EventManager\EventsCapableInterface

## Extend:

Laminas\View\Helper\Navigation\Menu

## Methods

| Name | Description |
|------|-------------|
|[addProperIndentation](#menuaddproperindentation)||
|[attributesToString](#menuattributestostring)||
|[getPrefixedClass](#menugetprefixedclass)||
|[getSizeClass](#menugetsizeclass)||
|[htmlElement](#menuhtmlelement)||
|[removeIndentation](#menuremoveindentation)||
|[setClassesToAttributes](#menusetclassestoattributes)||
|[setStylesToAttributes](#menusetstylestoattributes)||

## Inherited methods

| Name | Description |
|------|-------------|
|__call|Magic overload: Proxy calls to the navigation container|
|__invoke|View helper entry point.|
|__toString|Magic overload: Proxy to {@link render()}.|
|accept|Determines whether a page should be accepted when iterating|
|escapeLabels|Sets a flag indicating whether labels should be escaped.|
|findActive|Finds the deepest active page in the given container|
|getAcl|Returns ACL or null if it isn't set using {@link setAcl()} or
{@link setDefaultAcl()}|
|getAddClassToListItem|Returns flag indicating whether page class should be applied to <li> element.|
|getClosingBracket|Get the tag closing bracket|
|getContainer|Returns the navigation container helper operates on by default|
|getEventManager|Get the event manager, if present.|
|getIndent|Returns indentation|
|getLiActiveClass|Returns CSS class to use for the active 'li' element when rendering.|
|getMaxDepth|Returns maximum depth a page can have to be included when rendering|
|getMinDepth|Returns minimum depth a page must have to be included when rendering|
|getOnlyActiveBranch|Returns a flag indicating whether only active branch should be rendered.|
|getPartial|Returns partial view script to use for rendering menu.|
|getRenderInvisible|Return renderInvisible flag|
|getRenderParents|Returns flag indicating whether parents should be rendered when rendering only the active branch.|
|getRole|Returns ACL role to use when iterating pages, or null if it isn't set
using {@link setRole()} or {@link setDefaultRole()}|
|getServiceLocator|Get the service locator.|
|getTranslator|Returns translator used in helper|
|getTranslatorTextDomain|Return the translation text domain|
|getUlClass|Returns CSS class to use for the first 'ul' element when rendering.|
|getUseAcl|Returns whether ACL should be used|
|getView|Get the view object|
|hasAcl|Checks if the helper has an ACL instance|
|hasContainer|Checks if the helper has a container|
|hasRole|Checks if the helper has an ACL role|
|hasTranslator|Checks if the helper has a translator|
|htmlify|Returns an HTML string containing an 'a' element for the given page if
the page's href is not empty, and a 'span' element if it is empty.|
|isTranslatorEnabled|Returns whether translator is enabled and should be used|
|render|Renders menu.|
|renderMenu|Renders helper.|
|renderPartial|Renders the given $container by invoking the partial view helper.|
|renderPartialWithParams|Renders the given $container by invoking the partial view helper with the given parameters as the model.|
|renderSubMenu|Renders the inner-most sub menu for the active page in the $container.|
|setAcl|Sets ACL to use when iterating pages|
|setAddClassToListItem|Enables/disables page class applied to <li> element.|
|setContainer|Sets navigation container the helper operates on by default|
|setDefaultAcl|Sets default ACL to use if another ACL is not explicitly set|
|setDefaultRole|Sets default ACL role(s) to use when iterating pages if not explicitly
set later with {@link setRole()}|
|setEventManager|Set the event manager.|
|setIndent|Set the indentation string for using in {@link render()}, optionally a
number of spaces to indent with|
|setLiActiveClass|Sets CSS class to use for the active 'li' element when rendering.|
|setMaxDepth|Sets the maximum depth a page can have to be included when rendering|
|setMinDepth|Sets the minimum depth a page must have to be included when rendering|
|setOnlyActiveBranch|Sets a flag indicating whether only active branch should be rendered.|
|setPartial|Sets which partial view script to use for rendering menu.|
|setRenderInvisible|Render invisible items?|
|setRenderParents|Enables/disables rendering of parents when only rendering active branch.|
|setRole|Sets ACL role(s) to use when iterating pages|
|setServiceLocator|Set the service locator.|
|setTranslator|Sets translator to use in helper|
|setTranslatorEnabled|Sets whether translator is enabled and should be used|
|setTranslatorTextDomain|Set translation text domain|
|setUlClass|Sets CSS class to use for the first 'ul' element when rendering.|
|setUseAcl|Sets whether ACL should be used|
|setView|Set the View object|



### Menu::addProperIndentation  

**Description**

```php
 addProperIndentation (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Menu::attributesToString  

**Description**

```php
 attributesToString (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Menu::getPrefixedClass  

**Description**

```php
 getPrefixedClass (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Menu::getSizeClass  

**Description**

```php
 getSizeClass (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Menu::htmlElement  

**Description**

```php
 htmlElement (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Menu::removeIndentation  

**Description**

```php
 removeIndentation (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Menu::setClassesToAttributes  

**Description**

```php
 setClassesToAttributes (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />


### Menu::setStylesToAttributes  

**Description**

```php
 setStylesToAttributes (void)
```

 

 

**Parameters**

`This function has no parameters.`

**Return Values**

`void`


<hr />

