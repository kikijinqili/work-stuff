<?php

namespace Swissup\Firecheckout\Observer;

class AddPageClassName implements \Magento\Framework\Event\ObserverInterface
{
    /**
     * @var \Magento\Framework\View\Page\Config
     */
    protected $pageConfig;

    /**
     * @var \Swissup\Firecheckout\Helper\Data
     */
    protected $helper;

    /**
     */
    public function __construct(
        \Magento\Framework\View\Page\Config $pageConfig,
        \Swissup\Firecheckout\Helper\Data $helper
    ) {
        $this->pageConfig = $pageConfig;
        $this->helper = $helper;
    }

    /**
     * Add FontAwesome assets according to module config
     *
     * @param \Magento\Framework\Event\Observer $observer
     * @return void
     */
    public function execute(\Magento\Framework\Event\Observer $observer)
    {
        if (!$this->helper->isOnFirecheckoutPage()) {
            return;
        }

        $this->pageConfig->addBodyClass('firecheckout')
            ->addBodyClass('checkout-index-index')
            ->addBodyClass('fc-form-' . $this->helper->getFormStyle())
            ->addBodyClass('fc-theme-' . $this->helper->getTheme());

        if ($this->helper->getHideLabels()) {
            $this->pageConfig->addBodyClass('fc-form-hide-labels');
        }

        if (!$this->helper->getDisableTooltips()) {
            $this->pageConfig->addBodyClass('fc-form-tooltips');
        }

        if ($this->helper->getHideShippingMethods()) {
            $this->pageConfig->addBodyClass('fc-hide-shipping-methods');
        }

        foreach ($this->helper->getLayoutClassNames() as $class) {
            $this->pageConfig->addBodyClass($class);
        }
    }
}
