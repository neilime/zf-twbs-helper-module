<?php

// Documentation test config file for "Components / Forms / Custom forms" part
return [
    'title' => 'Custom forms',
    'url' => '%bootstrap-url%/components/forms/#custom-forms',
    'tests' => [
        [
            'title' => 'Checkboxes and radios',
            'url' => '%bootstrap-url%/components/forms/#checkboxes-and-radios-1',
            'tests' => [
                [
                    'title' => 'Checkboxes',
                    'url' => '%bootstrap-url%/components/forms/#checkboxes',
                    'rendering' => function (\Zend\View\Renderer\PhpRenderer $oView) {
                        $oFactory = new \Zend\Form\Factory();

                        echo $oView->formRow($oFactory->create([
                            'name' => 'custom_checkbox',
                            'type' => 'checkbox',
                            'options' => [
                                'label' => 'Check this custom checkbox',
                                'use_hidden_element' => false,
                                'form_group' => false,
                                'custom' => true,
                            ],
                            'attributes' => [
                                'id' => 'customCheck1',
                            ],
                        ]));
                    },
                    'expected' => '<div class="custom-checkbox&#x20;custom-control">' . PHP_EOL .
                        '    <input type="checkbox" name="custom_checkbox" id="customCheck1" ' .
                        'class="custom-control-input" value="1">' . PHP_EOL .
                        '    <label class="custom-control-label" for="customCheck1">' .
                        'Check this custom checkbox' .
                        '</label>' . PHP_EOL .
                        '</div>',
                ],
                [
                    'title' => 'Radios',
                    'url' => '%bootstrap-url%/components/forms/#checkboxes',
                    'rendering' => function (\Zend\View\Renderer\PhpRenderer $oView) {
                        $oFactory = new \Zend\Form\Factory();

                        echo $oView->formRow($oFactory->create([
                            'name' => 'customRadio',
                            'type' => 'radio',
                            'options' => [
                                'custom' => true,
                                'value_options' => [
                                    [
                                        'label' => 'Toggle this custom radio',
                                        'value' => '1',
                                        'attributes' => ['id' => 'customRadio1'],
                                    ],
                                    [
                                        'label' => 'Or toggle this other custom radio',
                                        'value' => '2',
                                        'attributes' => ['id' => 'customRadio2'],
                                    ],
                                ],
                            ],
                        ]));
                    },
                    'expected' => '<div class="custom-control&#x20;custom-radio">' . PHP_EOL .
                        '    <input type="radio" name="customRadio" class="custom-control-input" ' .
                        'id="customRadio1" value="1">' . PHP_EOL .
                        '    <label class="custom-control-label" for="customRadio1">' .
                        'Toggle this custom radio' .
                        '</label>' . PHP_EOL .
                        '</div>' . PHP_EOL .
                        '<div class="custom-control&#x20;custom-radio">' . PHP_EOL .
                        '    <input type="radio" name="customRadio" class="custom-control-input" ' .
                        'id="customRadio2" value="2">' . PHP_EOL .
                        '    <label class="custom-control-label" for="customRadio2">' .
                        'Or toggle this other custom radio' .
                        '</label>' . PHP_EOL .
                        '</div>',
                ],
                [
                    'title' => 'Inline',
                    'url' => '%bootstrap-url%/components/forms/#inline-1',
                    'rendering' => function (\Zend\View\Renderer\PhpRenderer $oView) {
                        $oFactory = new \Zend\Form\Factory();

                        echo $oView->formRow($oFactory->create([
                            'name' => 'customRadioInline1',
                            'type' => 'radio',
                            'options' => [
                                'layout' => \TwbsHelper\Form\View\Helper\Form::LAYOUT_INLINE,
                                'custom' => true,
                                'value_options' => [
                                    [
                                        'label' => 'Toggle this custom radio',
                                        'value' => '1',
                                        'attributes' => ['id' => 'customRadioInline1'],
                                    ],
                                    [
                                        'label' => 'Or toggle this other custom radio',
                                        'value' => '2',
                                        'attributes' => ['id' => 'customRadioInline2'],
                                    ],
                                ],
                            ],
                        ]));
                    },
                    'expected' => '<div class="custom-control&#x20;custom-control-inline&#x20;custom-radio">' .
                        PHP_EOL .
                        '    <input type="radio" name="customRadioInline1" class="custom-control-input" ' .
                        'id="customRadioInline1" value="1">' . PHP_EOL .
                        '    <label class="custom-control-label" for="customRadioInline1">' .
                        'Toggle this custom radio' .
                        '</label>' . PHP_EOL .
                        '</div>' . PHP_EOL .
                        '<div class="custom-control&#x20;custom-control-inline&#x20;custom-radio">' . PHP_EOL .
                        '    <input type="radio" name="customRadioInline1" class="custom-control-input" ' .
                        'id="customRadioInline2" value="2">' . PHP_EOL .
                        '    <label class="custom-control-label" for="customRadioInline2">' .
                        'Or toggle this other custom radio' .
                        '</label>' . PHP_EOL .
                        '</div>',
                ],
                [
                    'title' => 'Disabled',
                    'url' => '%bootstrap-url%/components/forms/#disabled',
                    'rendering' => function (\Zend\View\Renderer\PhpRenderer $oView) {
                        $oFactory = new \Zend\Form\Factory();

                        echo $oView->formRow($oFactory->create([
                            'name' => 'custom_checkbox_disabled',
                            'type' => 'checkbox',
                            'options' => [
                                'label' => 'Check this custom checkbox',
                                'use_hidden_element' => false,
                                'form_group' => false,
                                'custom' => true,
                            ],
                            'attributes' => [
                                'id' => 'customCheckDisabled1',
                                'disabled' => true,
                            ],
                        ])) . PHP_EOL;

                        echo $oView->formRow($oFactory->create([
                            'name' => 'radioDisabled',
                            'type' => 'radio',
                            'options' => [
                                'custom' => true,
                                'value_options' => [
                                    [
                                        'label' => 'Toggle this custom radio',
                                        'value' => '1',
                                        'attributes' => ['id' => 'customRadioDisabled2'],
                                    ],
                                ],
                            ],
                            'attributes' => ['disabled' => true],
                        ]));
                    },
                    'expected' =>
                    '<div class="custom-checkbox&#x20;custom-control">' . PHP_EOL .
                        '    <input type="checkbox" name="custom_checkbox_disabled" id="customCheckDisabled1" ' .
                        'disabled="disabled" class="custom-control-input" value="1">' . PHP_EOL .
                        '    <label class="custom-control-label" for="customCheckDisabled1">' .
                        'Check this custom checkbox' .
                        '</label>' . PHP_EOL .
                        '</div>' . PHP_EOL .
                        '<div class="custom-control&#x20;custom-radio">' . PHP_EOL .
                        '    <input type="radio" name="radioDisabled" disabled="disabled" ' .
                        'class="custom-control-input" id="customRadioDisabled2" value="1">' . PHP_EOL .
                        '    <label class="custom-control-label" for="customRadioDisabled2">' .
                        'Toggle this custom radio' .
                        '</label>' . PHP_EOL .
                        '</div>',
                ],
                [
                    'title' => 'Switches',
                    'url' => '%bootstrap-url%/components/forms/#switches',
                    'rendering' => function (\Zend\View\Renderer\PhpRenderer $oView) {
                        $oFactory = new \Zend\Form\Factory();

                        echo $oView->formRow($oFactory->create([
                            'name' => 'custom_switch',
                            'type' => 'checkbox',
                            'options' => [
                                'label' => 'Toggle this switch element',
                                'use_hidden_element' => false,
                                'form_group' => false,
                                'custom' => true,
                                'switch' => true,
                            ],
                            'attributes' => ['id' => 'customSwitch1'],
                        ])) . PHP_EOL;

                        echo $oView->formRow($oFactory->create([
                            'name' => 'custom_switch',
                            'type' => 'checkbox',
                            'options' => [
                                'label' => 'Disabled switch element',
                                'use_hidden_element' => false,
                                'form_group' => false,
                                'custom' => true,
                                'switch' => true,
                            ],
                            'attributes' => [
                                'id' => 'customSwitch2',
                                'disabled' => true,
                            ],
                        ]));
                    },
                    'expected' => '<div class="custom-control&#x20;custom-switch">' . PHP_EOL .
                        '    <input type="checkbox" name="custom_switch" id="customSwitch1" ' .
                        'class="custom-control-input" value="1">' . PHP_EOL .
                        '    <label class="custom-control-label" for="customSwitch1">' .
                        'Toggle this switch element' .
                        '</label>' . PHP_EOL .
                        '</div>' . PHP_EOL .
                        '<div class="custom-control&#x20;custom-switch">' . PHP_EOL .
                        '    <input type="checkbox" name="custom_switch" id="customSwitch2" ' .
                        'disabled="disabled" class="custom-control-input" value="1">' . PHP_EOL .
                        '    <label class="custom-control-label" for="customSwitch2">' .
                        'Disabled switch element' .
                        '</label>' . PHP_EOL .
                        '</div>',
                ],
            ],
        ],
    ],
];
