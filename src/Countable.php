<?php

namespace Jobcerto\Countable;

use Laravel\Nova\Fields\Field;

class Countable extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'countable';

    public function plural($label)
    {
        return $this->withMeta(['plural' => $label]);
    }

    public function singular($label)
    {
        return $this->withMeta(['singular' => $label]);
    }
}
