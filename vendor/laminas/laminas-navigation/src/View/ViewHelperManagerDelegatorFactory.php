<?php

/**
 * @see       https://github.com/laminas/laminas-navigation for the canonical source repository
 * @copyright https://github.com/laminas/laminas-navigation/blob/master/COPYRIGHT.md
 * @license   https://github.com/laminas/laminas-navigation/blob/master/LICENSE.md New BSD License
 */

namespace Laminas\Navigation\View;

use Interop\Container\ContainerInterface;
use Laminas\ServiceManager\DelegatorFactoryInterface;
use Laminas\ServiceManager\ServiceLocatorInterface;

/**
 * Inject the laminas-view HelperManager with laminas-navigation view helper configuration.
 *
 * This approach is used for backwards compatibility. The HelperConfig class performs
 * work to ensure that the navigation helper and all its sub-helpers are injected
 * with the view helper manager and application container.
 */
class ViewHelperManagerDelegatorFactory implements DelegatorFactoryInterface
{
    /**
     * {@inheritDoc}
     *
     * @return \Laminas\View\HelperPluginManager
     */
    public function __invoke(ContainerInterface $container, $name, callable $callback, array $options = null)
    {
        $viewHelpers = $callback();
        (new HelperConfig())->configureServiceManager($viewHelpers);
        return $viewHelpers;
    }

    /**
     * {@inheritDoc}
     *
     * @return \Laminas\View\HelperPluginManager
     */
    public function createDelegatorWithName(ServiceLocatorInterface $container, $name, $requestedName, $callback)
    {
        return $this($container, $requestedName, $callback);
    }
}
