import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { addItem } from 'components/cart/actions';
import LoadingDots from 'components/loading-dots';
import { CartProduct } from 'lib/strapi/domain/cart';

export default function EditItemQuantityButton({
  item,
  type
}: {
  item: CartProduct;
  type: 'plus' | 'minus';
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
      onClick={() => {
        startTransition(async () => {

          const typeAction: 'ADD' | 'REMOVE' = type === 'plus' ? 'ADD' : 'REMOVE';
        
          const error = await addItem( item.handle, item.variant.handle, typeAction );
          console.log(error);
          

          // if (error) {
          //     alert(error);
          //     return;
          // }

          router.refresh();

          // const error =
          //   type === 'minus' && item.quantity - 1 === 0
          //     ? await removeItem(item.handle, item.variant.handle)
          //     : await addItem(                
          //         item.handle,
          //         item.variant.handle,
          //          type === 'plus'? 'ADD' : 'REMOVE' 
          //         //  item.quantity + 1 : item.quantity - 1,
          //       );

          // if (error) {
          //   alert(error);
          //   return;
          // }

          // router.refresh();
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
