<?php

/**
 * @see       https://github.com/laminas/laminas-navigation for the canonical source repository
 * @copyright https://github.com/laminas/laminas-navigation/blob/master/COPYRIGHT.md
 * @license   https://github.com/laminas/laminas-navigation/blob/master/LICENSE.md New BSD License
 */

namespace Laminas\Navigation;

class ConfigProvider
{
    /**
     * Return general-purpose laminas-navigation configuration.
     *
     * @return array
     */
    public function __invoke()
    {
        return [
            'dependencies' => $this->getDependencyConfig(),
        ];
    }

    /**
     * Return application-level dependency configuration.
     *
     * @return array
     */
    public function getDependencyConfig()
    {
        return [
            'abstract_factories' => [
                Service\NavigationAbstractServiceFactory::class,
            ],
            'aliases' => [
                'navigation' => Navigation::class,

                // Legacy Zend Framework aliases
                \Zend\Navigation\Navigation::class => Navigation::class,
            ],
            'delegators' => [
                'ViewHelperManager' => [
                    View\ViewHelperManagerDelegatorFactory::class,
                ],
            ],
            'factories' => [
                Navigation::class => Service\DefaultNavigationFactory::class,
            ],
        ];
    }
}
