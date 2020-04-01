# TwbsHelper\View\Helper\Navigation\Breadcrumbs  

Helper for rendering breadcrumbs

## Implements:
Laminas\View\Helper\HelperInterface, Laminas\EventManager\EventManagerAwareInterface, Laminas\View\Helper\Navigation\HelperInterface, Laminas\EventManager\EventsCapableInterface

## Extend:

Laminas\View\Helper\Navigation\Breadcrumbs

## Methods

| Name | Description |
|------|-------------|

## Inherited methods

| Name | Description |
|------|-------------|
|__call|Magic overload: Proxy calls to the navigation container|
|__invoke|Helper entry point.|
|__toString|Magic overload: Proxy to {@link render()}.|
|accept|Determines whether a page should be accepted when iterating|
|findActive|Finds the deepest active page in the given container|
|getAcl|Returns ACL or null if it isn't set using {@link setAcl()} or
{@link setDefaultAcl()}|
|getClosingBracket|Get the tag closing bracket|
|getContainer|Returns the navigation container helper operates on by default|
|getEventManager|Get the event manager, if present.|
|getIndent|Returns indentation|
|getLinkLast|Returns whether last page in breadcrumbs should be hyperlinked.|
|getMaxDepth|Returns maximum depth a page can have to be included when rendering|
|getMinDepth|Returns minimum depth a page must have to be included when rendering|
|getPartial|Returns partial view script to use for rendering menu.|
|getRenderInvisible|Return renderInvisible flag|
|getRole|Returns ACL role to use when iterating pages, or null if it isn't set
using {@link setRole()} or {@link setDefaultRole()}|
|getSeparator|Returns breadcrumb separator.|
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
|render|Renders helper.|
|renderPartial|Renders the given $container by invoking the partial view helper.|
|renderPartialWithParams|Renders the given $container by invoking the partial view helper with the given parameters as the model.|
|renderStraight|Renders breadcrumbs by chaining 'a' elements with the separator
registered in the helper.|
|setAcl|Sets ACL to use when iterating pages|
|setContainer|Sets navigation container the helper operates on by default|
|setDefaultAcl|Sets default ACL to use if another ACL is not explicitly set|
|setDefaultRole|Sets default ACL role(s) to use when iterating pages if not explicitly
set later with {@link setRole()}|
|setEventManager|Set the event manager.|
|setIndent|Set the indentation string for using in {@link render()}, optionally a
number of spaces to indent with|
|setLinkLast|Sets whether last page in breadcrumbs should be hyperlinked.|
|setMaxDepth|Sets the maximum depth a page can have to be included when rendering|
|setMinDepth|Sets the minimum depth a page must have to be included when rendering|
|setPartial|Sets which partial view script to use for rendering menu.|
|setRenderInvisible|Render invisible items?|
|setRole|Sets ACL role(s) to use when iterating pages|
|setSeparator|Sets breadcrumb separator.|
|setServiceLocator|Set the service locator.|
|setTranslator|Sets translator to use in helper|
|setTranslatorEnabled|Sets whether translator is enabled and should be used|
|setTranslatorTextDomain|Set translation text domain|
|setUseAcl|Sets whether ACL should be used|
|setView|Set the View object|


