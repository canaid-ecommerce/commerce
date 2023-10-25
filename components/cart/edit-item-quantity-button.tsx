import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { addOrUpdateItem } from 'components/cart/actions';
import LoadingDots from 'components/loading-dots';
import { CartProduct } from 'lib/strapi/domain/cart';

export default function EditItemQuantityButton({
  item,
  type
}: {
  item: CartProduct;
  type: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
      onClick={() => {
        startTransition(async () => {
          // Safeguard in case someone messes with `disabled` in devtools.
          try {
            const typeAction: 'ADD' | 'REMOVE' = type === 'plus' ? 'ADD' : 'REMOVE';
            await addOrUpdateItem(item.product.data.attributes.handle, item.variant.handle, typeAction);
            router.refresh();
          } catch (e) {
            // TODO: error refactor
            console.log(e);
          }
        });
      }}
      disabled={isPending}
      className={clsx(
        'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80',
        {
          'cursor-not-allowed': isPending,
          'ml-auto': type === 'minus'
        }
      )}
    >
      {isPending ? (
        <LoadingDots className="bg-black dark:bg-white" />
      ) : type === 'plus' ? (
        <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
      ) : (
        <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
      )}
    </button>
  );
}
